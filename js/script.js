// Ini JS
function hitungLuas() {
    const alas = parseFloat(document.getElementById('nilai-alas').value);
    const tinggi = parseFloat(document.getElementById('nilai-tinggi').value);

    if(isNaN(alas) || isNaN(tinggi)) {
        alert("Please input a valid number");
        return;
    }

    const luas = (alas * tinggi) / 2;
    const result = document.getElementById('result');
    result.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${alas} x ${tinggi} <br> L = ${luas}`
    // alert(`Nilai Luas Segitiga adalah ${luas}`);
}

function hitungArea() {
    const alas = parseFloat(document.getElementById('nilai-alas').value);
    const s1 = parseFloat(document.getElementById('nilai-tinggi').value);
    const s2 = parseFloat(document.getElementById('nilai-sisi').value);

    if(isNaN(alas) || isNaN(s1) || isNaN(s2)) {
        alert("Please input a valid number");
        return;
    }

    const keliling = (alas + s1 + s2);
    const result = document.getElementById('result');
    result.innerHTML = `K = a + b + c <br> K = ${alas} + ${s1} + ${s2} <br> K = ${keliling}`
    // alert(`Nilai Keliling Segitiga adalah ${keliling}`) 
}

let isArea = true;
function toggleFormula() {
    // console.log('the code run');
    const title = document.getElementById('title-segitiga');
    const button = document.getElementById('toggle-button');
    const formulaSection = document.getElementById('formula-section');
    const formulaTitle = document.getElementById('formula-title');
    const inputSection = document.getElementById('input-section');

    if(isArea) {
        title.innerHTML = 'Kalkulator Keliling Segitiga'
        button.innerHTML = '<u>Pindah ke Luas Segitiga</u>';
        formulaSection.innerHTML = `
            <img src="https://thumbs2.imgbox.com/0d/86/b0aYBK1t_t.png" alt="segitiga">
            <section>
                <p>Rumus Keliling Segitiga :</p>
                <p  class="rumus"><b>K = a + b + c</b></p>
                <div>
                    <p>Dimana :</p>
                    <p>K = Keliling</p>
                    <p>a, b, c = Sisi-sisi segitiga</p>
                </div>
            </section>
        `;
        formulaTitle.innerHTML = `Hitung Keliling Segitiga`;
        inputSection.innerHTML = `
        <section id="input-section">
            <div>
                <form class="input">
                    <input type="text" placeholder="Nilai a" id="nilai-alas">
                    <input type="text" placeholder="Nilai b" id="nilai-tinggi">
                    <input type="text" placeholder="Nilai c" id="nilai-sisi">
                </form>
            </div>
            <div>
                <button type="button" id="button-hitung" onclick=hitungArea()>Hitung</button>
                <div id="result" class="result"></div>
                <button type="button" id="button-reset" onclick=resetInput()>Reset</button>
            </div>
        </section>
        `;
        
    } else {
        title.innerHTML = 'Kalkulator Luas Segitiga'
        button.innerHTML = '<u>Pindah ke Keliling Segitiga</u>';
        formulaSection.innerHTML = `
            <img src="https://thumbs2.imgbox.com/0d/86/b0aYBK1t_t.png" alt="segitiga">
            <section>
                <p>Rumus Luas Segitiga :</p>
                <p  class="rumus"><b>L = 1/2 x a x t</b></p>
                <div>
                    <p>Dimana :</p>
                    <p>L = Luas</p>
                    <p>a = Alas</p>
                    <p>t = Tinggi</p>
                </div>
            </section>
        `;
        formulaTitle.innerHTML = `Hitung Luas Segitiga`;
        inputSection.innerHTML = `
        <section id="input-section">
            <div>
                <form class="input">
                    <input type="text" placeholder="Nilai Alas" id="nilai-alas" >
                    <input type="text" placeholder="Nilai Tinggi" id="nilai-tinggi">
                    <input type="text" placeholder="Nilai Sisi s2" id="nilai-sisi" style="display: none;">
                </form>
            </div>
            <div>
                <button type="button" id="button-hitung" onclick=hitungLuas()>Hitung</button>
                <div id="result" class="result"></div>
                <button type="button" id="button-reset" onclick=resetInput()>Reset</button>
            </div>
        </section>
        `;
    }

    isArea = !isArea;
}

function resetInput() {
    document.getElementById('nilai-alas').value = "";
    document.getElementById('nilai-tinggi').value = "";
    const nilaiSisi = document.getElementById('nilai-sisi');
    if (nilaiSisi) {
        nilaiSisi.value = "";
    }
    const result = document.getElementById('result');
    if (result) {
        result.innerHTML = "";
    }
}