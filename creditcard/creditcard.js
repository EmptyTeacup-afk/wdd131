function displayError(msg) {
	// display error message
	document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
	//credit card number
	return number === '1234123412341234'
}

function submitHandler(event) {
	    event.preventDefault();
    let errorMsg = '';
	    displayError('');

    let cardNumber = document.querySelector('#creditCardNumber');
    const cardNum = cardNumber.value.trim();
    // Check if it's numeric and valid in one go
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits.\n';
        } else if (!isCardNumberValid(cardNum)) {
            errorMsg += 'Card number is not valid.\n';
        }

    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()
    const cvc = Number(document.querySelector('#cvc').value);

    //Check if CVC is valid
    if (!/^\d{3}$/.test(cvc)) {
        errorMsg += 'CVC must be at least 3 digits.\n';
    }

    //Check if expiration date is populated and valid
    if (expYear === 0 || expMonth === 0) {
        errorMsg += 'Expiration date is required.\n';
    } else if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))) {
        errorMsg += 'Card is expired.\n';
    }

    //Check if card holder is populated
    const cardHolder = document.querySelector('#cardHolder').value.trim();
    if (cardHolder === '') {
        errorMsg += 'Card holder is required.\n';
    } else if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
        errorMsg += 'Card holder name must contain only letters and spaces.\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    // Success: show a confirmation message
    const formContainer = document.getElementById('checkoutForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

document.querySelector('#checkoutForm').addEventListener('submit', submitHandler)