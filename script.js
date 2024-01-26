function encriptar() {
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                       .replace(/i/g, "imes")
                                       .replace(/a/g, "ai")
                                       .replace(/o/g, "ober")
                                       .replace(/u/g, "ufat");
    document.getElementById("resultado").value = textoEncriptado;
  
    // Mostrar el textarea y ocultar la imagen
    mostrarResultado();
  
    // Reiniciar el texto en el textarea
    document.getElementById("texto").value = "";
  }
  
  function copiar() {
    var resultado = document.getElementById("resultado");
  
    if (resultado.value.trim() === "") {
      // Si el área de texto de resultado está vacía, mostramos una alerta
      alert("No hay nada para copiar. El área de texto de resultado está vacía.");
    } else {
      resultado.select();
      document.execCommand("copy");
      alert("Texto copiado al portapapeles");
    }
  }
  
  function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoOriginal = textoEncriptado.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");
    document.getElementById("resultado").value = textoOriginal;
  
    // Mostrar el textarea y ocultar la imagen
    mostrarResultado();
  
    // Reiniciar el texto en el textarea
    document.getElementById("texto").value = "";
  }
  
  function mostrarResultado() {
    var resultado = document.getElementById("resultado");
    var mensajeImgContainer = document.getElementById("mensaje-img-container");
  
    if (resultado.value.trim() === "") {
      // Si el área de texto de resultado está vacía, mostramos la imagen
      resultado.style.display = "none";
      mensajeImgContainer.style.display = "block";
    } else {
      // Si hay texto, mostramos el textarea y ocultamos la imagen
      resultado.style.display = "block";
      mensajeImgContainer.style.display = "none";
    }
  }
  