
const perChairWood = "3 cft";
const perTableWood = "10 cft";
const perKhatWood = "50 cft";

function woodCalculator(chair, table, khat) {
    const chairWood = chair * 3;
    const tableWood = table * 10;
    const khatWood = khat * 50;
    console.log(
        "Chair Wood: " + chairWood,
        "Table Wood: " + tableWood,
        "Khat Wood: " + khatWood
    );
    return chairWood + tableWood + khatWood;
}







const totalWood = woodCalculator(4, 2, 2);
console.log(totalWood);