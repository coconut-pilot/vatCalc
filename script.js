// VAT Registered
document.getElementById('vatType').addEventListener('change', computeVAT);
document.getElementById('vatGross').addEventListener('input', computeVAT);

function computeVAT() {
    let type = document.getElementById('vatType').value;
    let gross = parseFloat(document.getElementById('vatGross').value);
    if (!type || isNaN(gross) || gross <= 0) {
        document.getElementById('vatResult').innerHTML = "Please select type and enter a valid amount.";
        return;
    }

    let quotient = gross / 1.12;
    let fivePercent = quotient * 0.05;
    let otherPercent = type === 'goods' ? quotient * 0.01 : quotient * 0.02;
    let sum = fivePercent + otherPercent;
    let net = gross - sum;

    document.getElementById('vatResult').innerHTML = `
        <h5>Computation Details</h5>
        Gross: ₱${gross.toFixed(2)}<br>
        Quotient (Gross ÷ 1.12): ₱${quotient.toFixed(2)}<br>
        5%: ₱${fivePercent.toFixed(2)}<br>
        ${type === 'goods' ? '1%' : '2%'}: ₱${otherPercent.toFixed(2)}<br>
        Sum of taxes: ₱${sum.toFixed(2)}<br>
        <strong>Net Amount: ₱${net.toFixed(2)}</strong>
    `;
}

// Non-VAT Registered
document.getElementById('nonVatType').addEventListener('change', computeNonVAT);
document.getElementById('nonVatGross').addEventListener('input', computeNonVAT);

function computeNonVAT() {
    let type = document.getElementById('nonVatType').value;
    let gross = parseFloat(document.getElementById('nonVatGross').value);
    if (!type || isNaN(gross) || gross <= 0) {
        document.getElementById('nonVatResult').innerHTML = "Please select type and enter a valid amount.";
        return;
    }

    let threePercent = gross * 0.03;
    let otherPercent = type === 'goods' ? gross * 0.01 : gross * 0.02;
    let sum = threePercent + otherPercent;
    let net = gross - sum;

    document.getElementById('nonVatResult').innerHTML = `
        <h5>Computation Details</h5>
        Gross: ₱${gross.toFixed(2)}<br>
        3%: ₱${threePercent.toFixed(2)}<br>
        ${type === 'goods' ? '1%' : '2%'}: ₱${otherPercent.toFixed(2)}<br>
        Sum of taxes: ₱${sum.toFixed(2)}<br>
        <strong>Net Amount: ₱${net.toFixed(2)}</strong>
    `;
}