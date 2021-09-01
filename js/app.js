// get Total price
function getTotalPrice() {
    const basePrice = parseFloat(document.getElementById('base-price').innerText)
    const extraMemoryPrice = parseFloat(document.getElementById('extra-memory-cost').innerText)
    const extraStoragePrice = parseFloat(document.getElementById('extra-storage-cost').innerText)
    const extraDeliveryPrice = parseFloat(document.getElementById('extra-delivery-cost').innerText)

    const total = basePrice + extraMemoryPrice + extraStoragePrice + extraDeliveryPrice;

    document.getElementById('total-main-price').innerText = total
    document.getElementById('total-price-footer').innerText = total
}

// promo code section 
document.getElementById('promo-button').addEventListener('click', function () {
    const totalPriceAmount = parseFloat(document.getElementById('total-main-price').innerText)
    const totalPromoPrice = document.getElementById('total-price-footer')
    const promoInputField = document.getElementById('promo-input')
    const userPromo = promoInputField.value

    if (userPromo == 'stevekaku') {
        const discountPromoPrice = (totalPriceAmount * 20) / 100
        const updatePrice = totalPriceAmount - discountPromoPrice
        totalPromoPrice.innerText = updatePrice
    }
    promoInputField.value = ''
})


// update memory cost function
function updateMemoryCost(extraPayForMemory) {
    if (extraPayForMemory == true) {
        document.getElementById('extra-memory-cost').innerText = '180'
    } else {
        document.getElementById('extra-memory-cost').innerText = '0'
    }
    getTotalPrice()
}

// handle memory cost
document.getElementById('memory-1').addEventListener('click', function () {
    updateMemoryCost(false)
})
document.getElementById('memory-2').addEventListener('click', function () {
    updateMemoryCost(true)
})


// update storage cost function 
function updateStorageCost(extraPayForStorage, storageId) {
    if (extraPayForStorage == false) {
        document.getElementById('extra-storage-cost').innerText = '0'
    } else {
        if (extraPayForStorage == true && storageId == 'storage-2') {
            document.getElementById('extra-storage-cost').innerText = '100'
        } else if (extraPayForStorage == true && storageId == 'storage-3') {
            document.getElementById('extra-storage-cost').innerText = '180'
        }
    }
    getTotalPrice()
}


// handle memory cost 
document.getElementById('storage-1').addEventListener('click', function () {
    updateStorageCost(false, 0)
})
document.getElementById('storage-2').addEventListener('click', function () {
    updateStorageCost(true, 'storage-2')
})
document.getElementById('storage-3').addEventListener('click', function () {
    updateStorageCost(true, 'storage-3')
})

// update delivery cost 
function updateDeliveryCost(extraPayForDelivery) {
    if (extraPayForDelivery == true) {
        document.getElementById('extra-delivery-cost').innerText = '20'
    } else {
        document.getElementById('extra-delivery-cost').innerText = '0'
    }
    getTotalPrice()
}

// handle delivery cost 
document.getElementById('first-delivery-option').addEventListener('click', function () {
    updateDeliveryCost(false)
})
document.getElementById('second-delivery-option').addEventListener('click', function () {
    updateDeliveryCost(true)
})