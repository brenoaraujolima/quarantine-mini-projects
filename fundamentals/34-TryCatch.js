function tratarErro(erro) {
    //throw new Error("Ocorreu um erro, imbecil")
    //throw 10
    throw new Error(10)
  }
  
  function gritarNome(obj) {
    try {
      console.log(obj.name.toUpperCase())
    }
    catch(e) {
      tratarErro(e)
    }
    finally {
      console.log("Acabou")
    }
  }
  
  const obj = {nome: 'Roberto'}
  gritarNome(obj)