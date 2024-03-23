// استماع لحدث submit على النموذج ومنع تحميل الصفحة عند الضغط على زر الإرسال
document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع تحميل الصفحة الافتراضي بعد الضغط على submit
    var sugarLevel = parseFloat(document.getElementById('sugarLevel').value); // معدل السكر المدخل
    var carbRatio = parseFloat(document.getElementById('carbRatio').value); // نسبة الكارب المدخلة
    var normalRangeLow = 100; // الحد الأدنى للنطاق الطبيعي
    var units = sugarLevel / carbRatio; // حساب عدد الوحدات

    // إذا كان السكر أقل من الحد الأدنى للنطاق الطبيعي، قم بحساب الوحدات التصحيحية وأضفها
    if (sugarLevel < normalRangeLow) {
        var correctionUnits = (normalRangeLow - sugarLevel) / 50; // الوحدات التصحيحية = (الحد الأدنى - السكر) / 50
        units += correctionUnits;
        // تحقق من عدم زيادة الوحدات التصحيحية بشكل يؤدي إلى انخفاض السكر أكثر من اللازم
        if (units > sugarLevel / 100) {
            units = sugarLevel / 100; // ضبط عدد الوحدات المأخوذة لكي لا يتسبب في انخفاض السكر أكثر
        }
    }
    document.getElementById('unitResult').textContent = units.toFixed(2);
});
