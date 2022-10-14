import express from 'express';
const app = express()
const port = 3000
import puppeteer from 'puppeteer';

app.get('/', async (req, res) => {
    try {

        const names = ["Dawn Kuhn", "Clinton Сидорова", "Hayley Schuster", "Tyra Коновалов", "Dahhak", "Tusya Udarchis", "Jayden Kessler", "Baljiwan", "Jason", "Delfina Rice", "Warinder", "Teerth", "Advik", "Champak", "Bindusar", "Naman", "Chakradev", "Hayden Туров", "Karolann Hoppe", "Manuel Kshlerin", "Kalaivanan", "Mahakaleshwar", "Fay Rowe", "Ruthe Friesen", "Tarak", "Owez", "Raghav", "Brijesh", "Derick Schinner", "Dafiq", "Eeswar", "Samar", "Nathan Ефремова", "Zehaan", "Gaoushik", "Ayushman", "Pranit", "Jabari Kunde", "Aadi", "Joany Wisozk", "Balveer", "Punit", "Myrtis Padberg", "Oleta Osinski", "Ghaalib", "Dhishan", "Sathvik", "Whitney Kovacek", "Yug", "April MacGyver", "Nageswara", "Simone Fadel", "Kshatragna", "Sriharsha", "Nihal", "Gaurav", "Rishi", "Mullinti", "Bhavik", "Raghukumara", "Dignesh", "Macy Schoen", "Ehan", "Melvin Назарова", "Nitesh", "Elilvendan", "Om", "Harshavardhan", "Maanas", "Mastan", "Aadarsh", "Sarvesh", "Teresa Brekke", "Camila Жданов", "Esta Mueller", "Thalia Haag", "Desiree Macejkovic", "Faakhir", "Julie Hackett", "Harikant", "Emmy Zemlak", "Devayan", "Gafur", "Vasant", "Prudence Powlowski", "Manuela Schuppe", "Nikesh", "Lucienne Wiza", "Maude Howe", "Nadeesh", "Bell Rohan", "Jasen Turcotte", "Qasim", "Rujul", "Siddharth", "Dudley Ferry", "Haasim", "Hemendra", "Hardik", "Manan", "Umang", "Stanford Botsford", "Barton Зиновьева", "Tanish", "Isabelle Steuber", "Bahadurjit", "Jameson Abbott", "Ijaz", "Danavendra", "Bhavesh", "Geethik", "Scotty Powlowski", "Tiara Gibson", "Chanakya", "Ayaan", "Alex Schroeder", "Rudra", "Lucie Schaefer", "Lavnik", "Ekram", "Neel", "Zaid", "Triston Waters", "Bhooteshwara", "Harish", "Aliza O'Connell", "Chakradhar", "Carmine Weber", "Lankapuravidahaka", "Jagat", "Torey Collier", "Berneice Орлова", "Daksh", "Mandar", "Garuda", "Freddy Некрасова", "Mansukh", "Henderson Hackett", "Aachman", "Ikbal", "Shaurya", "Hitesh", "Hareshwar", "Mark Stehr", "Onkar", "Haakim", "Kundan", "Mitesh", "Nishant", "Filiberto O'Keefe", "Nitin", "Liliane Субботин", "Bal Mukund", "Lakshiminath", "Utkarsh", "Jagdish", "Wriddhish", "Fitan", "Hemang", "Myles Wisozk", "Baber", "Dhridhakarmaavu", "Grayson Connelly", "Stephon Becker", "Nihant", "Ronith", "Fritz Беспалова", "Pranav", "Hredhaan", "Umraah", "Daivya", "Amey", "Ansh", "Balvan", "Gandharv", "Aalhad", "Annie Kerluke", "Thanvye", "Chellamani", "Fariq", "Chinmay", "Vaijeenath", "Ayushya", "Aayush", "Kirti", "Sankalp", "Pranay", "Nakul", "Abdul", "Amol", "Sudhir", "Mirajkar", "Chirayu", "Angelita Osinski", "Wahab", "Gautam", "Nadapratithishta", "Bakhshi", "Gamal", "Naavinya", "Ashwin", "Panchajana", "Vagadheeksha", "Balhaar", "Guneet", "Lakshit", "Ayush", "Neerav", "Keshaun Авдеев", "Faaiz", "Nakul", "Isaias Keebler", "Himesh", "Ernesh", "Gavin Lemke", "Veer", "Isaac", "Praneel", "Qarin", "Creola Rohan", "Fenil", "Angelo Hilpert", "Kabir", "Aarav", "Yolanda Wunsch", "Emmanuel Bartoletti", "Baashir", "Parth", "Chitrasen", "Laban", "Zayyan", "Navamani", "Nivant", "Chandrasai", "Ekalinga", "Abdul Трофимова", "Solon Crooks", "Dahak", "Barney Владимирова", "Kaachim", "Dillan Schulist", "Munjal", "Vedant", "Ada Swaniawski", "Adrain Комиссарова", "Diya Al Din", "Liban", "Faqid", "Yagnesh", "Modesta Lemke", "Asa O'Keefe", "Ellen Михайлов", "Jai", "Balamurugan", "Prasannatmane", "Bhargava", "Steve Кулаков", "Venkatesh", "Swapnil", "Ishwar", "Aafaaq", "Jayadeva", "Dhaval", "Raaghava", "Rayaan", "Aalim", "Hansaraj", "Danavarsh", "Manthan", "Darsh", "Badeeh", "Avi", "Falan", "Fiyaz", "Luella Keebler", "Rodger Hauck", "Farhan", "Celine White", "Ekbal", "Azad", "Conner Luettgen", "Garret Cassin", "Kaanishk", "Gunbir", "Aryan", "Banaj", "Veda Streich", "Guy Schinner", "Siddhesh", "Dasaradh", "Sudharma", "Stephania Мухина", "Jatin", "Ekapad", "Wridesh", "Vivaan", "Ajinkya", "Laron Deckow", "Chandresh", "Reyansh", "Kabalikruta", "Chithrakundhala", "Lucky", "Najeeb", "Jeet", "Nayanesh", "Jabeer", "Nona Zieme", "Rushil", "Demario Gutmann", "Chandrakant", "Madhusudan", "Gandhamadhana", "Vishveshwara", "Lorenzo Kessler", "Leland Wisoky", "Kristian Howell", "Leonie Кириллов", "Arin", "Palanichamy", "Yuvraj", "Atharv", "Herik", "Prajith", "Riyad", "Deval", "Chellamuthu", "Vishu", "Joshil", "Mohammed", "Sarthak", "Green Ferry", "Tejas", "Hobart Mosciski", "Blaise Агафонов", "Sanket", "Ilanthirayan", "Kasandra Тарасов", "Lea Нестеров", "Hayley Bernhard", "Prathit", "Ekansh", "Hanna Bogan", "Karan", "Ettie Wiegand", "Saavyas", "Frederic Котов", "Daphnee Murazik", "Venkatesh", "Chaidya", "Rosina Исаева", "Marc Ward", "Abeer", "Melany Kozey", "Habib", "Harsh", "Marlee Moore", "Rehaan", "Chaital", "Sunil", "Jairaj", "Aadithyakethu", "Navin", "Indrajit", "Raajan", "Rhianna Гордеев", "Jocelyn Gaylord", "Aadhavan", "Jagadisha", "Chintransh", "Abhinay", "Daityakarya", "Armani Batz", "Missouri Runolfsson", "Elna Schmitt", "Ebrahim", "Girish", "Nathaniel Grant", "Sai", "Faateh", "Sabareeshwara", "Chatresh", "Aarif", "Torrey Виноградов", "Ethiraj", "Jeffery Воронов", "Bajrang", "Girindra", "Fadil", "Abhimanyu", "Bakhtawar", "Bhagyanandana", "Audrey Lindgren", "Bala Subramani", "Valentina Wilkinson", "Shashank", "Mahesh", "Neel", "Amish", "Mal Marugan", "Aadrik", "Aarv", "Krishna", "Gangasiruvan", "Hussain", "Trisha Ruecker", "Akarshan", "Azaan", "Aaaqil", "Winona Wilderman", "Mitesh", "Dev", "Nilesh", "Udarsh", "Aakif", "Chaanakya", "Hritik", "Aditya", "Delphine Brekke", "Nikunj", "Nash Carroll", "Angeline Moore", "Nagabhushana", "Zackary Zemlak", "Jayesh", "Adah Turner", "Micheal McClure", "Pushpraj", "Daanish", "Dhruv", "Bachittar", "Mahindra", "Chintan", "Adaline Григорьев", "Malinda Blick", "Blaze Prohaska", "Praruj", "Naveen", "Samaksh", "Qadir", "Zita Kerluke", "Elody Субботин", "Zayan", "Suhail", "Jaiprakash", "Bart Koepp", "Rohan", "Baasim", "Jayden Lueilwitz", "Kaycee Dibbert", "Prithvij", "Fravash", "Alycia Johnson", "Madhav", "Aadhirai", "Rajasekaran", "Kaanchanadhwaja", "Akshay", "Batuk", "Anmol", "Jignesh", "Baidyanath", "Frado", "Girish", "Ramesh", "Mahadhyuta", "Qabil", "Anay", "Udayasooriyan", "Ranveer", "Crawford Савельева", "Rachel Hessel", "Basir", "Devansh", "Govindaram", "Vijayrathna", "Tatvagyanaprada", "Delta Osinski", "Badrinarayanan", "Osborne Кудрявцев", "Abhinivesh", "Aakalp", "Grayson Горбачев", "Domenic Krajcik", "Markus O'Keefe", "Aarnav", "Warjas", "Girinath", "Banjeet", "Orinder", "Yash", "Vida Auer", "Waylon Титова", "Mireille Botsford", "Jatin", "Agnikumara", "Pratap", "Taylor Кононова", "Tanner Kassulke", "Vighnarajendra", "Charan", "Sydnee Kris", "Javon Павлов", "Evyavan", "Neeraj", "Chithravarma", "Daksh", "Kunjan", "Dalbir", "Lathesh", "Jarod Dooley", "Ranbir", "Chinmayee", "Abhiram", "Mukund", "Annabelle Чернов", "Laksh", "Prajnan", "Chandran", "Yatin", "Bagira", "Lohit", "Faeem", "Ekhlaq", "Sven Satterfield", "Arlie Sporer", "Prahas", "Cheranraj", "Viraj", "Cali Koepp", "Ganadhakshya", "Charish", "Danush", "Samarth", "Vivek", "Balaark", "Upkaar", "Darpan", "Aadamya", "Daamin", "Garjan", "Estell Macejkovic", "Juliet Kunze", "Saksham", "Karli Турова", "Nakulesh", "Chafik", "Omkaar", "Sacchidananda", "Arjun", "Zashil", "Adib", "Oshin", "Rachit", "Cullen Афанасьев", "Arindham", "Orion Corkery", "Yadira Vandervort", "Arulappan", "Aadhyatm", "Ignacio Королев", "Tanveer", "Mayur", "Newton Pacocha", "Sirak", "Onveer", "Darrick Swift", "Inbanathan", "Haylee Bernier", "Batnasiddhikara", "Vijay", "Jarvis Stokes", "Prathu", "Lisa Чернов", "Faraj", "Dhyutidhara", "Kathryne Hane", "Chatura", "Samarpana", "Omkareshwar", "Ayana Мартынова", "Samesh", "Agastya", "Subhash", "Kara Hayes", "Jo Raynor", "Girik", "Ojas", "Justina Little", "Pruthviraj", "Missouri Price", "Gouthaman", "Udant", "Madeshwaran", "Gopal", "Shivansh", "Jigisu", "Teagan Spinka", "Jigar", "Aarsh", "Rosella Lockman", "Chaitanya", "Gaurang", "Keyshawn Jacobson", "Geetham", "Effie Halvorson", "Ekaraj", "Nathanial Игнатова", "Aanandit", "Advay", "Bala Shankar", "Tanay", "Taabish", "Naksh", "Dashagreevakulantaka", "Gagan", "Tushar", "Murlimanohar", "Ekavir", "Kalaparan", "Golden Дементьев", "Jaime Murray", "Anirudh", "Parasmaijyotishe", "Erich Schulist", "Antone Lindgren", "Darsh", "Delbert Иванова", "Bhavin", "Dharmesh", "Dakshesh", "Kirat", "Pushkar", "Christa Королев", "Faris", "Imaran", "Falgun", "Polly Wyman", "Ibrahim Marvin", "Ishaan", "Faras", "Aarush", "Maandavik", "Julie Дроздова", "Leon Block", "Ghaazi", "Faarooq", "Manley Braun", "Nachiket", "Srivasthav", "Indradyumm", "Balendra", "Naresh", "Maxie Sipes", "Lakshmipriya", "Esteban Фокин", "Travon Kuphal", "Radhatanaya", "Advaith", "Harshil", "Jerod Steuber", "Eijaz", "Amalia Pouros", "Gajanan", "Nimish", "Qadim", "Daiwik", "Prathamesh", "Fanibhushan", "Velma Bartell", "Maximillia O'Keefe", "Kiaan", "Sridhara", "Chaitanya", "Reshvind", "Ryan", "Maanav", "Vihaan", "Pratyush", "Manbir", "Ekachith", "Nabhanyu", "Parvez", "Vishal", "Terrence Прохоров", "Yatan", "Aaftab", "Paresh", "Makenzie Максимова", "Jena Никифоров", "Kalpit", "Ishanyu", "Harshal", "Shantanu", "Krish", "Bernadette Trantow", "Bhushan", "Eudora Swift", "Sushil", "Karim", "Amos Beahan", "Chidakash", "Wazir", "Elouise Gulgowski"];

        const browser = await puppeteer.launch({ headless: true });

        for await (const name of names.slice(0, 100)) {

            console.log('name', name)

            const page = await browser.newPage();
            await page.setViewport({
                width: 1200,
                height: 700,
                deviceScaleFactor: 1,
            });
            await page.goto('https://bit.ly/3SEgWe7',
                { waitUntil: "networkidle0" });

            await page.click('#buttonsbox > button:nth-child(2)');

            await page.waitForNavigation({
                waitUntil: 'networkidle0',
            });

            await page.waitForSelector('.button-wrapper.continue button', {
                visible: true,
            });

            await page.click('.button-wrapper.continue button');

            await page.waitForSelector('#username');

            // await page.screenshot({ path: names[i]+'1.png' });
            await page.type('#username', '');

            await page.evaluate(() => document.getElementById("username").value = "")

            await new Promise(r => setTimeout(r, 200));

            await page.type('#username', name);
            // await page.screenshot({ path: names[i]+'2.png' });
            await page.click('.button-col button');
            // await page.screenshot({ path: 'example9.png' });

            await new Promise(r => setTimeout(r, 1000));

        }

        res.json('okk 2')

    } catch (err) {
        console.log('err--------', err)
        return res.status(400).json(err);
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
