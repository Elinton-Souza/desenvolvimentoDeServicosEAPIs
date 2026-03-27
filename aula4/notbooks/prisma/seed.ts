import { prisma } from "../lib/prisma";
import { type Prisma } from "../generated/prisma/client"

const notebooks: Prisma.NotebookCreateInput[]  = [
{
        "modelo": "TUF Gaming F15",
        "marca": "Asus",
        "processador": "AMD",
        "preco": 7451,
        "quant": 2
    },
    {
        "modelo": "Victus 15",
        "marca": "HP",
        "processador": "AMD",
        "preco": 5306,
        "quant": 7
    },
    {
        "modelo": "Book NP550",
        "marca": "Samsung",
        "processador": "AMD",
        "preco": 8677,
        "quant": 12
    },
    {
        "modelo": "Galaxy Book3",
        "marca": "Samsung",
        "processador": "AMD",
        "preco": 6098,
        "quant": 11
    },
    {
        "modelo": "Nitro V15",
        "marca": "Acer",
        "processador": "AMD",
        "preco": 4689,
        "quant": 15
    },
    {
        "modelo": "IdeaPad 3",
        "marca": "Lenovo",
        "processador": "AMD",
        "preco": 8015,
        "quant": 15
    },
    {
        "modelo": "G5 KF",
        "marca": "Gigabyte",
        "processador": "Intel",
        "preco": 6958,
        "quant": 13
    },
    {
        "modelo": "Cyborg 15",
        "marca": "MSI",
        "processador": "AMD",
        "preco": 3651,
        "quant": 13
    },
    {
        "modelo": "TUF Gaming F15",
        "marca": "Asus",
        "processador": "Intel",
        "preco": 3466,
        "quant": 12
    },
    {
        "modelo": "ExpertBook B1",
        "marca": "Asus",
        "processador": "Intel",
        "preco": 7076,
        "quant": 15
    },
    {
        "modelo": "Katana 17",
        "marca": "MSI",
        "processador": "AMD",
        "preco": 2569,
        "quant": 14
    },
    {
        "modelo": "Vivobook 15",
        "marca": "Asus",
        "processador": "AMD",
        "preco": 6147,
        "quant": 8
    },
    {
        "modelo": "ProBook 440",
        "marca": "HP",
        "processador": "AMD",
        "preco": 6572,
        "quant": 13
    },
    {
        "modelo": "ROG Strix G16",
        "marca": "Asus",
        "processador": "AMD",
        "preco": 6340,
        "quant": 8
    },
    {
        "modelo": "Yoga 7i",
        "marca": "Lenovo",
        "processador": "AMD",
        "preco": 7814,
        "quant": 6
    },
    {
        "modelo": "Swift Go",
        "marca": "Acer",
        "processador": "AMD",
        "preco": 7294,
        "quant": 10
    },
    {
        "modelo": "Katana 17",
        "marca": "MSI",
        "processador": "Intel",
        "preco": 6116,
        "quant": 1
    },
    {
        "modelo": "G5 KF",
        "marca": "Gigabyte",
        "processador": "AMD",
        "preco": 5271,
        "quant": 10
    },
    {
        "modelo": "Prestige 14",
        "marca": "MSI",
        "processador": "Intel",
        "preco": 8176,
        "quant": 11
    },
    {
        "modelo": "G15 Gaming",
        "marca": "Dell",
        "processador": "AMD",
        "preco": 2891,
        "quant": 3
    }
]

async function main() {
    try {
        await prisma.notebook.createMany({ data: notebooks })
        console.log(`${notebooks.length} Notebooks Cadastrados...`)
    } catch (error) {
        console.error("Erro nas Inclusões (Seeds):", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

await main()
