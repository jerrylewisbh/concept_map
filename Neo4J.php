<?php
session_start();
class Neo4J
{
    public function getGraphNeo4J()
    {
        $username = 'neo4j';
        $password = 's08o07l01';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://localhost:7474/db/data/cypher");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, true);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");

        switch ($_SESSION['complLevel']) {
            case 1:
                $relevance = "((toInt(n.relevanceByPageRank) <= 1) and (toInt(p.relevanceByPageRank) <= 1) and (toInt(n.relevanceBytfidf) <= 1) and (toInt(p.relevanceBytfidf) <= 1))";
                break;
            case 2:
                $relevance = "((toInt(n.relevanceByPageRank) <= 2) and (toInt(p.relevanceByPageRank) <= 2) and (toInt(n.relevanceBytfidf) <= 2) and (toInt(p.relevanceBytfidf) <= 2))";
                break;
            case 3:
                $relevance = "((toInt(n.relevanceByPageRank) <= 3) and (toInt(p.relevanceByPageRank) <= 3) and (toInt(n.relevanceBytfidf) <= 3) and (toInt(p.relevanceBytfidf) <= 3)";
                break;
            default:
                $relevance = "((toInt(n.relevanceByPageRank) <= 4) and (toInt(p.relevanceByPageRank) <= 4) and (toInt(n.relevanceBytfidf) <= 4) and (toInt(p.relevanceBytfidf) <= 4))";
        }

        curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");

            $query = [
                "query" => "CALL apoc.export.json.query(\"MATCH path=(n:$_SESSION[label])-[r]->(p:$_SESSION[label])
MATCH (m:$_SESSION[label]{name:'$_SESSION[dataset_qs]'}) where ((type(r) <> 'subject') and (toUpper(n.name) <> toUpper(p.name)) and (toInt(n.communityLouvain) = toInt(m.communityLouvain)) and (toInt(p.communityLouvain) = toInt(m.communityLouvain))) or ((toUpper(n.name) <> toUpper(p.name)) and (type(r) <> 'subject') and $relevance) return collect(path) as list\", '../../wamp64/www/concept_map/data/default/".$_SESSION['dataset_qs']."_".$_SESSION['mapType'].".json')"];

        if($_SESSION['mapType'] == "Hierarchical") {
            $query = [
                "query" => "CALL apoc.export.json.query(\"MATCH path=(n:$_SESSION[label])-[r]->(p:$_SESSION[label])
MATCH (m:$_SESSION[label]{name:'$_SESSION[dataset_qs]'}) where ((type(r) = 'subject') and (toUpper(n.name) <> toUpper(p.name)) and (toInt(n.communityLouvain) = toInt(m.communityLouvain)) and (toInt(p.communityLouvain) = toInt(m.communityLouvain))) or ((toUpper(n.name) <> toUpper(p.name)) and (type(r) = 'subject') and $relevance) return collect(path) as list\", '../../wamp64/www/concept_map/data/default/".$_SESSION['dataset_qs']."_".$_SESSION['mapType'].".json')"];
        }
        $query = json_encode($query);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json; ', 'Content-Type: application/json', 'Content-Length: ' . strlen($query), 'X-Stream: true'));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);

        $result = curl_exec($ch);
        $response = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    }

}