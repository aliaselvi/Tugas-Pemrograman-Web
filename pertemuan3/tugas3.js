class Laptop {
    constructor(nama, merk, tahun, spesifikasi) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.spesifikasi = spesifikasi;
    }

    infoLaptop() {
        return `Laptop ${this.nama} adalah merk ${this.merk}, diproduksi pada tahun ${this.tahun}, dengan spesifikasi ${this.spesifikasi}.`;
    }
}

class LaptopGaming extends Laptop {
    constructor(nama, merk, tahun, spesifikasi, kartuGrafis) {
        super(nama, merk, tahun, spesifikasi); 
        this.kartuGrafis = kartuGrafis; 
    }

    infoLaptopGaming() {
        return `${this.infoLaptop()} Laptop ini dilengkapi dengan kartu grafis ${this.kartuGrafis} untuk performa gaming yang optimal.`;
    }
}

const laptopUltrabook = new Laptop("XPS 13", "Dell", 2021, "Intel i7, 16GB RAM, 512GB SSD");
const laptop2in1 = new Laptop("Surface Pro 7", "Microsoft", 2020, "Intel i5, 8GB RAM, 256GB SSD");

const laptopGaming1 = new LaptopGaming("ROG Strix", "Asus", 2022, "Intel i9, 32GB RAM, 1TB SSD", "NVIDIA RTX 3080");

console.log(laptopUltrabook.infoLaptop());
console.log(laptop2in1.infoLaptop());
console.log(laptopGaming1.infoLaptopGaming());
