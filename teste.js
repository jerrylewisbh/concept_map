var links = [{source:"Robert_Bunsen",type:"doctoralStudent",target:"Adolf_von_Baeyer"},
{source:"Eduard_Buchner",type:"doctoralAdvisor",target:"Adolf_von_Baeyer"},
{source:"Carl_Theodore_Liebermann",type:"doctoralAdvisor",target:"Adolf_von_Baeyer"},
{source:"Leo_Szilard",type:"academicAdvisor",target:"Albert_Einstein"},
{source:"Albert_Einstein",type:"subject",target:"Albert_Einstein"},
{source:"Robert_Lefkowitz",type:"after",target:"Arieh_Warshel"},
{source:"Michael_Levitt",type:"with",target:"Arieh_Warshel"},
{source:"Brian_Kobilka",type:"after",target:"Arieh_Warshel"},
{source:"Otto_Wallach",type:"doctoralAdvisor",target:"August_Wilhelm_von_Hofmann"},
{source:"Haber_process",type:"subject",target:"BASF"},
{source:"Carl_Bosch",type:"subject",target:"BASF"},
{source:"Carl_Bosch",type:"workplaces",target:"BASF"},
{source:"BASF",type:"subject",target:"BASF"},
{source:"Basel",type:"subject",target:"Basel"},
{source:"Basel",type:"parliamentName",target:"Basel"},
{source:"Basel",type:"executiveName",target:"Basel"},
{source:"Fritz_Haber",type:"deathPlace",target:"Basel"},
{source:"Yves_Chauvin",type:"birthPlace",target:"Belgium"},
{source:"Second_Battle_of_Ypres",type:"place",target:"Belgium"},
{source:"Ilya_Prigogine",type:"deathPlace",target:"Belgium"},
{source:"Belgium",type:"subject",target:"Belgium"},
{source:"Nobel_Prize_in_Chemistry",type:"1data",target:"Ben_Feringa"},
{source:"Nobel_Prize_in_Chemistry",type:"afterElection",target:"Ben_Feringa"},
{source:"Robert_Lefkowitz",type:"with",target:"Brian_Kobilka"},
{source:"Michael_Levitt",type:"before",target:"Brian_Kobilka"},
{source:"Arieh_Warshel",type:"before",target:"Brian_Kobilka"},
{source:"Carl_Liebermann",type:"wikiPageRedirects",target:"Carl_Theodore_Liebermann"},
{source:"Adolf_von_Baeyer",type:"doctoralStudent",target:"Carl_Theodore_Liebermann"},
{source:"Clara_Immerwahr",type:"deathPlace",target:"Dahlem_(Berlin)"},
{source:"ETH_Zürich",type:"wikiPageRedirects",target:"ETH_Zurich"},
{source:"ETH_Zurich",type:"subject",target:"ETH_Zurich"},
{source:"Albert_Einstein",type:"workplaces",target:"ETH_Zurich"},
{source:"Albert_Einstein",type:"education",target:"ETH_Zurich"},
{source:"Fritz_Haber",type:"workplaces",target:"ETH_Zurich"},
{source:"Lars_Onsager",type:"workInstitution",target:"ETH_Zürich"},
{source:"ETH_Zürich",type:"sameAs",target:"ETH_Zürich"},
{source:"Electrochemistry",type:"subject",target:"Electrochemistry"},
{source:"Ernest_Rutherford",type:"subject",target:"Ernest_Rutherford"},
{source:"Fritz_Haber",type:"knownFor",target:"Fertilizer"},
{source:"Irène_Joliot-Curie",type:"spouse",target:"Frédéric_Joliot-Curie"},
{source:"Frédéric_Joliot-Curie",type:"sameAs",target:"Frédéric_Joliot-Curie"},
{source:"August_Wilhelm_von_Hofmann",type:"nationality",target:"Germans"},
{source:"Wilhelm_Ostwald",type:"nationality",target:"Germans"},
{source:"Haber_Process",type:"wikiPageRedirects",target:"Haber_process"},
{source:"Ammonia",type:"http://www.w3.org/2000/01/rdf-schema#seeAlso",target:"Haber_process"},
{source:"Fritz_Haber",type:"knownFor",target:"Haber_process"},
{source:"Haber–Weiss_reaction",type:"sameAs",target:"Haber–Weiss_reaction"},
{source:"Fritz_Haber",type:"knownFor",target:"Haber–Weiss_reaction"},
{source:"Weizmann_Institute_of_Science",type:"founder",target:"Chaim_Weizmann"},
{source:"Chemical_warfare",type:"subject",target:"Chemical_warfare"},
{source:"Fritz_Haber",type:"subject",target:"Chemical_warfare"},
{source:"Fritz_Haber",type:"knownFor",target:"Chemical_warfare"},
{source:"Yves_Chauvin",type:"hypernym",target:"Chemist"},
{source:"William_E._Moerner",type:"hypernym",target:"Chemist"},
{source:"Wilhelm_Ostwald",type:"hypernym",target:"Chemist"},
{source:"Ryōji_Noyori",type:"hypernym",target:"Chemist"},
{source:"Robert_Bunsen",type:"hypernym",target:"Chemist"},
{source:"Otto_Wallach",type:"hypernym",target:"Chemist"},
{source:"Martin_Karplus",type:"hypernym",target:"Chemist"},
{source:"Linus_Pauling",type:"hypernym",target:"Chemist"},
{source:"Lars_Onsager",type:"hypernym",target:"Chemist"},
{source:"Jean-Pierre_Sauvage",type:"hypernym",target:"Chemist"},
{source:"Jaroslav_Heyrovský",type:"hypernym",target:"Chemist"},
{source:"Fritz_Haber",type:"hypernym",target:"Chemist"},
{source:"Adolf_Windaus",type:"hypernym",target:"Chemist"},
{source:"Adolf_von_Baeyer",type:"hypernym",target:"Chemist"},
{source:"August_Wilhelm_von_Hofmann",type:"hypernym",target:"Chemist"},
{source:"Ben_Feringa",type:"hypernym",target:"Chemist"},
{source:"Carl_Bosch",type:"hypernym",target:"Chemist"},
{source:"Clara_Immerwahr",type:"hypernym",target:"Chemist"},
{source:"Eduard_Buchner",type:"hypernym",target:"Chemist"},
{source:"Ilya_Prigogine",type:"hypernym",target:"Chemist"},
{source:"Chaim_Weizmann",type:"profession",target:"Chemist"},
{source:"Fritz_Haber",type:"spouse",target:"Clara_Immerwahr"},
{source:"Wrocław",type:"country",target:"Poland"},
{source:"Wrocław",type:"http://www.w3.org/2000/01/rdf-schema#seeAlso",target:"Poland"},
{source:"Switzerland",type:"subject",target:"Switzerland"},
{source:"Basel",type:"hypernym",target:"Switzerland"},
{source:"Albert_Einstein",type:"citizenship",target:"Switzerland"},
{source:"Albert_Einstein",type:"residence",target:"Switzerland"},
{source:"Switzerland",type:"http://www.w3.org/2000/01/rdf-schema#seeAlso",target:"Switzerland"},
{source:"Basel",type:"country",target:"Switzerland"},
{source:"ETH_Zurich",type:"country",target:"Switzerland"},
{source:"Zürich",type:"country",target:"Switzerland"},
{source:"Technical_University_of_Berlin",type:"subject",target:"Technical_University_of_Berlin"},
{source:"Leo_Szilard",type:"almaMater",target:"Technical_University_of_Berlin"},
{source:"Chaim_Weizmann",type:"almaMater",target:"Technical_University_of_Berlin"},
{source:"Carl_Bosch",type:"almaMater",target:"Technical_University_of_Berlin"},
{source:"Adolf_von_Baeyer",type:"workInstitution",target:"Technical_University_of_Berlin"},
{source:"Fritz_Haber",type:"almaMater",target:"Technical_University_of_Berlin"},
{source:"Leo_Szilard",type:"workplaces",target:"Humboldt_University_of_Berlin"},
{source:"James_Franck",type:"workplaces",target:"Humboldt_University_of_Berlin"},
{source:"James_Franck",type:"almaMater",target:"Humboldt_University_of_Berlin"},
{source:"Humboldt_University_of_Berlin",type:"subject",target:"Humboldt_University_of_Berlin"},
{source:"August_Wilhelm_von_Hofmann",type:"workInstitution",target:"Humboldt_University_of_Berlin"},
{source:"Albert_Einstein",type:"workplaces",target:"Humboldt_University_of_Berlin"},
{source:"Fritz_Haber",type:"almaMater",target:"Humboldt_University_of_Berlin"},
{source:"James_Franck",type:"award",target:"Iron_Cross"},
{source:"Marie_Curie",type:"children",target:"Irène_Joliot-Curie"},
{source:"Irène_Joliot-Curie",type:"sameAs",target:"Irène_Joliot-Curie"},
{source:"Frédéric_Joliot-Curie",type:"spouse",target:"Irène_Joliot-Curie"},
{source:"Jaroslav_Heyrovský",type:"sameAs",target:"Jaroslav_Heyrovský"},
{source:"Nobel_Prize_in_Chemistry",type:"1data",target:"Jean-Pierre_Sauvage"},
{source:"Nobel_Prize_in_Chemistry",type:"afterElection",target:"Jean-Pierre_Sauvage"},
{source:"Judaism",type:"subject",target:"Judaism"},
{source:"Germans",type:"religion",target:"Judaism"},
{source:"Chaim_Weizmann",type:"religion",target:"Judaism"},
{source:"William_Lipscomb",type:"doctoralAdvisor",target:"Linus_Pauling"},
{source:"Martin_Karplus",type:"doctoralAdvisor",target:"Linus_Pauling"},
{source:"Nobel_laureates_in_Chemistry",type:"wikiPageRedirects",target:"List_of_Nobel_laureates_in_Chemistry"},
{source:"Marie_Curie",type:"subject",target:"Marie_Curie"},
{source:"Irène_Joliot-Curie",type:"subject",target:"Marie_Curie"},
{source:"Frédéric_Joliot-Curie",type:"subject",target:"Marie_Curie"},
{source:"Robert_Lefkowitz",type:"after",target:"Martin_Karplus"},
{source:"Michael_Levitt",type:"with",target:"Martin_Karplus"},
{source:"Linus_Pauling",type:"doctoralStudent",target:"Martin_Karplus"},
{source:"Brian_Kobilka",type:"after",target:"Martin_Karplus"},
{source:"Arieh_Warshel",type:"with",target:"Martin_Karplus"},
{source:"Arieh_Warshel",type:"with",target:"Michael_Levitt"},
{source:"Brian_Kobilka",type:"after",target:"Michael_Levitt"},
{source:"Robert_Lefkowitz",type:"after",target:"Michael_Levitt"},
{source:"Yves_Chauvin",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"William_Lipscomb",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"William_E._Moerner",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Robert_Lefkowitz",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Michael_Levitt",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Martin_Karplus",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Marie_Curie",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Linus_Pauling",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Lars_Onsager",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Arieh_Warshel",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Ben_Feringa",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Brian_Kobilka",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Carl_Bosch",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Eduard_Buchner",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Jean-Pierre_Sauvage",type:"award",target:"Nobel_Prize_in_Chemistry"},
{source:"Yves_Chauvin",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"William_Lipscomb",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"William_E._Moerner",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Wilhelm_Ostwald",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Ryōji_Noyori",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Robert_Lefkowitz",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Otto_Wallach",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Norman_Haworth",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Michael_Levitt",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Martin_Karplus",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Marie_Curie",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Linus_Pauling",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Lars_Onsager",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Jean-Pierre_Sauvage",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Jaroslav_Heyrovský",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Irène_Joliot-Curie",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Ilya_Prigogine",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Fritz_Haber",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Adolf_Windaus",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Adolf_von_Baeyer",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Arieh_Warshel",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Ben_Feringa",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Brian_Kobilka",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Carl_Bosch",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Eduard_Buchner",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Ernest_Rutherford",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Frédéric_Joliot-Curie",type:"subject",target:"Nobel_laureates_in_Chemistry"},
{source:"Norman_Haworth", type:"doctoralAdvisor",target:"Otto_Wallach"},
{source:"Physical_chemistry", type:"subject",target:"Physical_chemistry"},
{source:"Lars_Onsager", type:"field",target:"Physical_chemistry"},
{source:"Electrochemistry",type:"subject",target:"Physical_chemistry"},
{source:"Fritz_Haber",type:"field",target:"Physical_chemistry"},
{source:"Adolf_von_Baeyer",type:"birthPlace",target:"Prussia"},
{source:"Weizmann_Institute_of_Science",type:"city",target:"Rehovot"},
{source:"Rehovot",type:"subject",target:"Rehovot"},
{source:"Chaim_Weizmann",type:"deathPlace",target:"Rehovot"},
{source:"Fritz_Haber",type:"doctoralAdvisor",target:"Robert_Bunsen"},
{source:"Michael_Levitt",type:"before",target:"Robert_Lefkowitz"},
{source:"Brian_Kobilka",type:"with",target:"Robert_Lefkowitz"},
{source:"Brian_Kobilka",type:"academicAdvisor",target:"Robert_Lefkowitz"},
{source:"Arieh_Warshel",type:"before",target:"Robert_Lefkowitz"},
{source:"Ryōji_Noyori",type:"sameAs",target:"Ryōji_Noyori"},
{source:"Fritz_Haber",type:"knownFor",target:"Second_Battle_of_Ypres"},
{source:"Michael_Levitt",type:"after",target:"William_E._Moerner"},
{source:"Linus_Pauling",type:"doctoralStudent",target:"William_Lipscomb"},
{source:"Robert_Bunsen",type:"doctoralStudent",target:"Fritz_Haber"},
{source:"August_Wilhelm_von_Hofmann",type:"doctoralStudent",target:"Fritz_Haber"},
{source:"Clara_Immerwahr",type:"almaMater",target:"University_of_Breslau"},
{source:"Fritz_Haber",type:"workplaces",target:"University_of_Karlsruhe"},
{source:"Weizmann_Institute_of_Science",type:"subject",target:"Weizmann_Institute_of_Science"},
{source:"Michael_Levitt",type:"workplaces",target:"Weizmann_Institute_of_Science"},
{source:"Arieh_Warshel",type:"workInstitutions",target:"Weizmann_Institute_of_Science"},
{source:"Arieh_Warshel",type:"almaMater",target:"Weizmann_Institute_of_Science"},
{source:"Wrocław",type:"subject",target:"Wrocław"},
{source:"Wrocław",type:"sameAs",target:"Wrocław"},
{source:"Fritz_Haber",type:"birthPlace",target:"Wrocław"},
{source:"Zürich",type:"subject",target:"Zürich"},
{source:"Zürich",type:"parliamentName",target:"Zürich"},
{source:"Zürich",type:"executiveName",target:"Zürich"},
{source:"Zürich",type:"sameAs",target:"Zürich"},
{source:"Zürich",type:"seeAlso",target:"Zürich"},
{source:"Switzerland",type:"largestCity",target:"Zürich"},
{source:"ETH_Zurich",type:"city",target:"Zürich"}
];
//sort links by source, then target
links.sort(function(a, b) {
  if (a.source > b.source) {
    return 1;
  } else if (a.source < b.source) {
    return -1;
  } else {
    if (a.target > b.target) {
      return 1;
    }
    if (a.target < b.target) {
      return -1;
    } else {
      return 0;
    }
  }
});
//any links with duplicate source and target get an incremented 'linknum'
for (var i = 0; i < links.length; i++) {
  if (i != 0 &&
    links[i].source == links[i - 1].source &&
    links[i].target == links[i - 1].target) {
    links[i].linknum = links[i - 1].linknum + 1;
  } else {
    links[i].linknum = 1;
  };
};

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {
    name: link.source
  });
  link.target = nodes[link.target] || (nodes[link.target] = {
    name: link.target
  });
});

var w = 600,
  h = 600;

var force = d3.layout.force()
  .nodes(d3.values(nodes))
  .links(links)
  .size([w, h])
  .linkDistance(150)
  .charge(-300)
  .on("tick", tick)
  .start();

var svg = d3.select("body").append("svg:svg")
  .attr("width", w)
  .attr("height", h)
  .style("background", "#FFF7DB");

// Per-type markers, as they don't inherit styles.
svg.append("svg:defs").selectAll("marker")
  .data(["UVA", "Prework", "School", "Golf", "Board"])
  .enter().append("svg:marker")
  .attr("id", String)
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 30)
  .attr("refY", -4.5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto")
  .append("svg:path")
  .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("svg:g").selectAll("path")
  .data(force.links())
  .enter().append("svg:path")
  .attr("class", function(d) {
    return "link " + d.type;
  })
  .attr("id", function(d, i) {
    return "linkId_" + i;
  })
  .attr("marker-end", function(d) {
    return "url(#" + d.type + ")";
  });


var linktext = svg.append("svg:g").selectAll("g.linklabelholder").data(force.links());

linktext.enter().append("g").attr("class", "linklabelholder")
  .append("text")
  .attr("class", "linklabel")
  .style("font-size", "13px")
  .attr("x", "50")
  .attr("y", "-20")
  .attr("text-anchor", "start")
  .style("fill", "#000")
  .append("textPath")
  .attr("xlink:href", function(d, i) {
    return "#linkId_" + i;
  })
  .text(function(d) {
    return d.type;
  });

var circle = svg.append("svg:g").selectAll("circle")
  .data(force.nodes())
  .enter().append("svg:circle")
  .attr("r", 20)
  .style("fill", "#FD8D3C")
  .call(force.drag);

var text = svg.append("svg:g").selectAll("g")
  .data(force.nodes())
  .enter().append("svg:g");

text.append("svg:text")
  .attr("x", "-1em")
  .attr("y", ".31em")
  .style("font-size", "13px")
  .text(function(d) {
    return d.name;
  });

// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", function(d) {
    var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = 75 / d.linknum; //linknum is defined above
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  });

  circle.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  text.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });


}
