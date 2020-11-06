function pollingFn() {
    var summaryPromotion = document.querySelector('.table-order-summary-promotion-value');
    var MonthFreeText = 'First Month Free';
    return (summaryPromotion !== undefined && summaryPromotion.textContent.includes(MonthFreeText))
}
