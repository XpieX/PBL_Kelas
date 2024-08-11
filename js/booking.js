function bookingForm(e){
    event.preventDefault();
    var name = document.getElementById('name').value;
    var ids = document.getElementById('ids').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var bookingData = {
        name,
        ids,
        phone,
        date,
        time
    };

    var json = JSON.stringify(bookingData);
    localStorage.setItem(ids, json);
    console.log('Booking Details:', bookingData);

    // Reset form
    // document.getElementById('bookingForm').reset();

    alert('Booking berhasil!');
}
