<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>
	<input/>
	<button>Exibir texto digitado</button>

	<script>
    	var input = document.querySelector("input");

   		function exibeTexto() {

      	  alert(input.value);
    	}

    	var button = document.querySelector("button");
   		button.onclick = exibeTexto;

	</script>

</body>
</html>