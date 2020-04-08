<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta charset="utf-8">
        <title>Concept Map</title>
        <link rel="stylesheet" href="bootstrap.css">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="svg.css">
    </head>
    <body>
        <!--[if lt IE 9]>
        <div class="unsupported-browser">
            This website does not fully support your browser.  Please get a
            better browser (Firefox or <a href="/chrome/">Chrome</a>, or if you
            must use Internet Explorer, make it version 9 or greater).
        </div>
        <![endif]-->
        <div id="split-container">
            <div class="container">
			<form action="graph.php" method="post">
			  <div class="form-group">
				<label for="exampleFormControlSelect1">Topic</label>
			  <select class="form-control" name="dataset_qs" weight="60%">
				  <option value="Fritz_Haber">Fritz Haber</option>
                  <option value="Carl_Bosch">Carl Bosch</option>
                  <option value="Albert_Einstein">Albert Einstein</option>
				  <option value="Database">Database</option>
			  </select>
 <br />
                <label>Complexity level</label>
                <label class="radio-inline"><input type="radio" name="complLevel"  value="1" checked>Level 1</label>
                <label class="radio-inline"><input type="radio" name="complLevel" value="2">Level 2</label>
                <label class="radio-inline"><input type="radio" name="complLevel" value="3">Level 3</label>
                <label class="radio-inline"><input type="radio" name="complLevel" value="4">Level 3</label>
              </div>
			  <input type="submit" class="btn btn-primary">
			</form>
		</div>
			
            
			
        </div>
        <script src="jquery/jquery-1.10.2.min.js"></script>
        <script src="jquery/jquery.browser.min.js"></script>
        <script src="d3/d3.v3.min.js"></script>
        <script src="colorbrewer.js"></script>
        <script src="lib/geometry.js"></script>
        <script>
            var config = <?php echo json_encode($config); ?>;
        </script>
		
		
    </body>
	
	
</html>
