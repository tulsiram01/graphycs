function initiatePayment(priceId) {
    let priceText = document.getElementById(priceId).innerText;
    let price = parseFloat(priceText.replace('₹', '').trim()) * 100;

    var options = {
        "key": "rzp_test_7JEhhBhgHQxD9v",
        "amount": price,
        "currency": "INR",
        "name": "Pramod Printers",
        "description": "Purchase Product",
        "image": "images/logo1.png",
        "handler": function (response) {
            alert("Payment Successful. Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}