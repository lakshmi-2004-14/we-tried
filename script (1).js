// Connect to Ethereum network
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const microfinanceContractAddress = 'YOUR_MICROFINANCE_CONTRACT_ADDRESS';
const cryptoTransactionContractAddress = 'YOUR_CRYPTO_CONTRACT_ADDRESS';

const microfinanceContract = new web3.eth.Contract(MicrofinanceManagementABI, microfinanceContractAddress);
const cryptoTransactionContract = new web3.eth.Contract(CryptoTransactionManagementABI, cryptoTransactionContractAddress);

document.getElementById('loanRequestForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const loanAmount = document.getElementById('loanAmount').value;
    const loanDuration = document.getElementById('loanDuration').value;
    const accounts = await web3.eth.getAccounts();
    await microfinanceContract.methods.requestLoan(loanAmount, loanDuration).send({ from: accounts[0] });
});

document.getElementById('loanRepayForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await microfinanceContract.methods.repayLoan().send({ from: accounts[0], value: web3.utils.toWei('amount', 'ether') });
});

document.getElementById('cryptoTransferForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const recipientAddress = document.getElementById('recipientAddress').value;
    const transferAmount = document.getElementById('transferAmount').value;
    const accounts = await web3.eth.getAccounts();
    await cryptoTransactionContract.methods.transfer(recipientAddress, transferAmount).send({ from: accounts[0], value: transferAmount });
});
