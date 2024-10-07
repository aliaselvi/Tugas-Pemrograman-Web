//Class1 Kapal
class Kapal {
    constructor (jenis) {
        this.jenis = jenis;
    }

    MerekdanUkuran(){
        console.log(`Kapal ${this.jenis} memiliki Merek dan Ukuran`);
    }
}   

// Class Pesiar yang meng-extend Kapal
class Pesiar extends Kapal {
    MerekdanUkuran() {
        console.log(`Kapal ${this.jenis} merek kapal tipe pesiar. berukuran besar`);
    }
}

// Class Barang yang meng-extend Kapal
class Barang extends Kapal {
    MerekdanUkuran() {
        console.log(`Kapal ${this.jenis} kapal barang. berukuran kecil, sedang, dan besar`);
    }
}

// Membuat array dari objek Kapal
let listKapal = [new Pesiar('Pesiar'), new Barang('Barang')];

// Menggunakan forEach untuk menampilkan informasi setiap kapal
listKapal.forEach(kapal => kapal.MerekdanUkuran());

//----------------------------------------------------------------//

//Class1 laptop
class laptop {
    constructor (jenis) {
        this.jenis = jenis;
    }

    MerekdanSpesifikasi(){
        console.log(`Laptop ${this.jenis} memiliki Merek dan Spesifikai`);
    }
}   

class Asus extends laptop {
    MerekdanSpesifikasi() {
        console.log(`Laptop ${this.jenis} merek asus ,mempunyai spesifikasi ukuran ram 32gb`);
    }
}

class HP extends laptop {
    MerekdanSpesifikasi() {
        console.log(`Laptop ${this.jenis} merek HP. mempunyai spesifikasi storage 256 gb-1tb`);
    }
}


let listLaptop = [new Asus('Asus'), new HP('HP')];

listLaptop.forEach(Laptop => Laptop.MerekdanSpesifikasi());

//Class handphone
class Handphone {
    constructor (jenis) {
        this.jenis = jenis;
    }

    HargadanSpesifikasi(){
        console.log(`Handphone ${this.jenis} memiliki range harga dan spesifikasi`);
    }
}   

class Iphone extends Handphone {
    HargadanSpesifikas() {
        console.log(`Handphone ${this.jenis} merek hamdphone iphone memiliki range harga 5-24 juta`);
    }
}

class samsung extends Handphone {
    HargadanSpesifikas() {
        console.log(`Handphone ${this.jenis} merek handphone samsung memiliki range harga 2- 15juta`);
    }
}


let listHandphone = [new Iphone('Iphone'), new samsung('samsung')];

listHandphone.forEach(Handphone => Handphone.HargadanSpesifikas());

//Class Sepatu
class Sepatu {
    constructor (jenis) {
        this.jenis = jenis;
    }

    HargadanUkuran(){
        console.log(`Sepatu ${this.jenis} memiliki range harga dan Ukuran`);
    }
}   

class Adidas extends Sepatu {
    HargadanUkuran() {
        console.log(`Sepatu ${this.jenis} sepatu Adidas memiliki range harga 4-8 juta`);
    }
}

class Nike extends Sepatu {
    HargadanUkuran() {
        console.log(`Sepatu ${this.jenis} merek sepatu Nike memiliki range harga 3- 7 juta`);
    }
}


let listSepatu = [new Adidas('Adidas'), new Nike('Nike')];

listSepatu.forEach(Sepatu => Sepatu.HargadanUkuran());