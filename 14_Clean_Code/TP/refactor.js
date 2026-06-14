async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);
        displayOrderModal(order, token);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getOrderDetails(orderId, token) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        {
            headers: {
                Authorization: token
            }
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function displayOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');

    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;

    modal.style.display = 'block';

    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector('.close');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        return;
    }

    confirmBtn.style.display = 'block';

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}