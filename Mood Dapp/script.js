import { ethers } from "./ethers-5.2.esm.min.js"

const getMood = document.getElementById('GetMood');
const setMood = document.getElementById('SetMood');
getMood.onclick = GetMood;
setMood.onclick = SetMood;
console.log("AOA");

async function connect() {

    if (typeof window.ethereum !== 'undifined') {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Connected");
    } else {
        console.log("Get A Metamask Wallet");
    }

}
connect();

// let contractAddress = "0x56D3bD3dD31adfCbF004E7f28146a4B8f30655f9";
let contractAddress = "0x06466CB76d0fbdFEFD93CAf5f5d8DE6E236A5C93";

let contractAbi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_mood",
                "type": "string"
            }
        ],
        "name": "setMood",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMood",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer = provider.getSigner();
let MoodContract = new ethers.Contract(contractAddress, contractAbi, signer)


async function GetMood() {
    const getMoodPromise = MoodContract.getMood();
    const nMood = await getMoodPromise;
    console.log(nMood);
}

async function SetMood() {
    const nmood = document.getElementById("mood").value;
    const setMoodPromise = MoodContract.setMood(nmood);
    await setMoodPromise;
}



