function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique o ano e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'

            if (idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebem.png')
            }
            else if (idade >= 3 && idade < 12){
                //criança
                img.setAttribute('src', 'criancam.png')
            }
            else if (idade >= 12 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }
            else if (idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosom.png')
            }

        }
        else if(fsex[1].checked){
            genero = 'mulher'

            if (idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebef.png')
            }
            else if (idade >= 3 && idade < 12){
                //criança
                img.setAttribute('src', 'criancaf.png')
            }
            else if (idade >= 12 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemf.png')
            }
            else if (idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'adultof.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosof.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem <strong>${idade} ano(s)</strong> de idade!`
        res.appendChild(img)
    }
}