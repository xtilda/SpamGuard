const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Telefon numarası doğrulaması
const blockedNumbers = ['1234567890', '0987654321']; // Engellenen numaraların listesi

app.post('/incoming-call', (req, res) => {
    const phoneNumber = req.body.phoneNumber; // Gelen çağrının numarasını alın
    if (blockedNumbers.includes(phoneNumber)) {
        // Eğer numara engellenmişse, çağrıyı reddet
        console.log(`Engellenen numara: ${phoneNumber}`);
        res.status(403).send('Forbidden');
    } else {
        // Numara engellenmemişse, çağrıyı kabul et
        console.log(`Kabul edilen numara: ${phoneNumber}`);
        res.status(200).send('OK');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
