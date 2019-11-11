1. Once retrieving the 'Hobbit' and 'Maiar' keys we notice the discrepancy that he are missing one value for each key. For Hobbit we should receive Frodo and Bilbo, but we receive only Frodo, and with Maiar we should receive The Necromancer and Sauron but only receive Sauron.

1.2 Once our HashMap is ran it increases the capacity from the initial value of 8 to 24 in order to make room for additional key value pairs. This is done because our Max Load ratio of 50% was surpassed.

2. The function instantiates two different HashMaps and attempts to assign two key value pairs to each one. However, the key of every key value pair is identical, thus the second assignment overwrites the first. So the console.logs will return the second assignments values => (20) , (10).