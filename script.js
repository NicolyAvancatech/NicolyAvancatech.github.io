
// =================================
// ANO AUTOMÁTICO NO RODAPÉ
// =================================

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


// =====================================
// CORES AUTOMÁTICAS DA FOTO DO GITHUB
// =====================================

const fotoGithub = document.getElementById("foto-github");

async function atualizarCoresGithub() {
    try {
        // Busca os dados do perfil do GitHub
        const resposta = await fetch(
            "https://api.github.com/users/NicolyAvancatech"
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível acessar o GitHub.");
        }

        const usuario = await resposta.json();

        // Atualiza a foto de perfil
        const urlFoto = new URL(usuario.avatar_url);
        urlFoto.searchParams.set("size", "512");
        urlFoto.searchParams.set("v", Date.now());

        fotoGithub.crossOrigin = "anonymous";
        fotoGithub.src = urlFoto.href;

        // Aguarda a imagem carregar
        fotoGithub.onload = () => {
            analisarImagem(fotoGithub);
        };

    } catch (erro) {
        console.error("Erro ao buscar foto do GitHub:", erro);
    }
}


// ANALISA AS CORES DA FOTO
function analisarImagem(imagem) {
    try {
        const canvas = document.createElement("canvas");
        const contexto = canvas.getContext("2d", {
            willReadFrequently: true
        });

        canvas.width = 100;
        canvas.height = 100;

        contexto.drawImage(imagem, 0, 0, 100, 100);

        const dados = contexto.getImageData(
            0, 0, 100, 100
        ).data;

        let vermelho = 0;
        let verde = 0;
        let azul = 0;
        let quantidade = 0;

        // Calcula a média das cores da imagem
        for (let i = 0; i < dados.length; i += 4) {
            const r = dados[i];
            const g = dados[i + 1];
            const b = dados[i + 2];
            const alpha = dados[i + 3];

            if (alpha > 128) {
                vermelho += r;
                verde += g;
                azul += b;
                quantidade++;
            }
        }

        if (quantidade === 0) return;

        vermelho = Math.round(vermelho / quantidade);
        verde = Math.round(verde / quantidade);
        azul = Math.round(azul / quantidade);

        // Converte RGB para HSL
        const [h, s] = converterParaHSL(
            vermelho,
            verde,
            azul
        );

        // Define uma paleta baseada na foto
        const saturacao = Math.max(s, 45);

        const principal = `hsl(${h}, ${saturacao}%, 18%)`;
        const secundaria = `hsl(${(h + 35) % 360}, ${saturacao}%, 15%)`;
        const destaque = `hsl(${h}, ${Math.min(saturacao + 15, 100)}%, 75%)`;
        const fundo = `hsl(${h}, 100%, 6%)`;
        const card = `hsl(${h}, 30%, 40%)`;

        // Atualiza as variáveis do CSS
        const raiz = document.documentElement;

        raiz.style.setProperty("--cor-principal", principal);
        raiz.style.setProperty("--cor-secundaria", secundaria);
        raiz.style.setProperty("--cor-destaque", destaque);
        raiz.style.setProperty("--cor-fundo", fundo);
        raiz.style.setProperty("--cor-card", card);

        console.log("Paleta atualizada!", {
            principal,
            secundaria,
            destaque
        });

    } catch (erro) {
        console.error(
            "Não foi possível analisar a imagem:",
            erro
        );
    }
}


// CONVERSÃO RGB PARA HSL
function converterParaHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const maior = Math.max(r, g, b);
    const menor = Math.min(r, g, b);

    let h = 0;
    let s = 0;

    const l = (maior + menor) / 2;

    if (maior !== menor) {
        const diferenca = maior - menor;

        s = l > 0.5
            ? diferenca / (2 - maior - menor)
            : diferenca / (maior + menor);

        switch (maior) {
            case r:
                h = (g - b) / diferenca + (g < b ? 6 : 0);
                break;

            case g:
                h = (b - r) / diferenca + 2;
                break;

            case b:
                h = (r - g) / diferenca + 4;
                break;
        }

        h *= 60;
    }

    return [
        Math.round(h),
        Math.round(s * 100)
    ];
}


// INICIA O SISTEMA
atualizarCoresGithub();

window.addEventListener("load", () => {
    const intro = document.getElementById("intro");

    setTimeout(() => {
        intro.remove();
    }, 3100);
});
