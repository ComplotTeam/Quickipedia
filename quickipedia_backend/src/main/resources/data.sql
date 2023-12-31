INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is the largest animal on Earth?',
        'The Blue Whale is the largest animal on Earth, reaching lengths of up to 100 feet and weights of over 200 tons. These marine mammals are known for their immense size and heart, the largest of any animal, which can weigh as much as a small car.',
        'Animals', 11);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'How long do elephants live?',
        'Elephants can live for up to 70 years in the wild. They are the largest land animals and have complex social structures, long memories, and display behaviors such as grieving for their dead.',
        'Animals', 3);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Can penguins fly?',
        'Penguins are flightless birds. While they can’t fly in the air, their bodies are perfectly adapted for swimming. With their wing-like flippers, streamlined bodies, and webbed feet, they are expert swimmers, using their skills to catch fish and other sea life.',
        'Animals', 2);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What do kangaroos keep in their pouches?',
        'Kangaroos use their pouches to carry and nurture their young. The pouch is a fold of skin with a single opening that contains mammary glands for feeding the baby kangaroo, called a joey, which stays in the pouch until it matures.',
        'Animals', 14);

INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is the world’s largest continent?',
        'Asia is the world’s largest continent both by size and population. It covers around 30% of Earth’s land area and hosts more than 60% of the world’s current human population, featuring diverse cultures, languages, and ecosystems.',
        'Geography', 6);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Which country has the most islands?',
        'Sweden has the most islands of any country, with over 220,000 islands. However, only about 1,000 of them are inhabited. These islands vary in size and are spread across the Baltic Sea and the Gulf of Bothnia.',
        'Geography', 5);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is the smallest country in the world?',
        'Vatican City is the smallest country in the world, both in terms of area and population. It’s an independent city-state enclaved within Rome, Italy, and is the spiritual and administrative center of the Roman Catholic Church.',
        'Geography', 7);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Which ocean is Bermuda located in?',
        'Bermuda is located in the North Atlantic Ocean. Known for its pink-sand beaches and as the namesake of the Bermuda Triangle, an area where ships and aircraft have mysteriously disappeared.',
        'Geography', 18);

INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is sushi traditionally wrapped in?',
        'Traditional sushi is wrapped in nori, a type of edible seaweed. Sushi comes in various forms, using different types of fish, vegetables, and occasionally tropical fruits, and is a staple in Japanese cuisine.',
        'Food', 20);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Which fruit is known as the “king of fruits”?',
        'The Durian is known as the “king of fruits” in Southeast Asia. It’s famous for its large size, strong odor, and thorn-covered rind. The taste is a unique combination of sweet and creamy, but its pungent smell is off-putting to some.',
        'Food', 10);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is the main ingredient in guacamole?',
        'The main ingredient in guacamole is avocado. Originating from Mexico, guacamole is a popular dip made by mashing ripe avocados and mixing them with various seasonings, including onions, tomatoes, garlic, lime juice, and cilantro.',
        'Food', 9);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Is honey the only food that doesn’t spoil?',
        'Yes, honey is the only food that doesn’t spoil. Thanks to its low moisture content and high acidity, honey can last indefinitely if stored properly. Bees process honey by adding enzymes, which also contribute to its long shelf life.',
        'Food', 1);

INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Who is known as the “King of Pop”?',
        'Michael Jackson is renowned as the “King of Pop.” He was a significant figure in popular music for over four decades, known for his innovative music, dance moves, and impactful music videos. His album “Thriller” remains the best-selling album of all time.',
        'Pop-culture', 16);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What movie features the quote, “I’ll be back”?',
        '"I’ll be back" is a famous quote from the 1984 film “The Terminator,” starring Arnold Schwarzenegger. This line has become one of the most iconic in film history and is synonymous with Schwarzenegger’s career.',
        'Pop-culture', 15);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What is the best-selling album of all time?',
        'The best-selling album of all time is “Thriller” by Michael Jackson, released in 1982. It broke numerous sales records and received critical acclaim for its innovation in sound production, songwriting, and visual presentation in music videos.',
        'Pop-culture', 4);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Who wrote the Harry Potter books?',
        'The Harry Potter books were written by British author J.K. Rowling. The series, comprising seven books, has gained immense popularity worldwide, leading to a major movie franchise, various merchandise, and theme park attractions.',
        'Pop-culture', 13);

INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What does “HTTP” stand for?',
        'HTTP stands for Hypertext Transfer Protocol. It’s the foundation of any data exchange on the Web and a protocol used for transmitting hypertext requests and information on the internet.',
        'Technology', 12);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What was the first programmable computer?',
        'The Z3, completed in 1941 by German engineer Konrad Zuse, is considered the first programmable computer. It was used to perform complex engineering calculations and was a significant step in the development of modern computing.',
        'Technology', 19);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'Who is considered the father of the computer?',
        'Charles Babbage is often referred to as the father of the computer. In the 19th century, he conceptualized and began developing the Analytical Engine, which laid the groundwork for the modern computer.',
        'Technology', 8);
INSERT INTO article(article_id, question, answer, topic, rank)
VALUES (NEWID(), 'What year was the first iPhone released?',
        'The first iPhone was released in 2007. Unveiled by Steve Jobs, it was a breakthrough in mobile phone technology, combining a phone, an internet communicator, and a digital music player.',
        'Technology', 17);

--SECOND BATCH
INSERT INTO article(article_id, question, answer, topic, source, rank)
VALUES (NEWID(),
        'What distinguishes quantum computing from classical computing?',
        'Quantum computing uses qubits, enabling simultaneous data processing, unlike classical computings binary bits. This leads to faster problem-solving for specific tasks like cryptography and complex simulations.',
        'Technology',
        'https://en.wikipedia.org/wiki/Quantum_computing',
        21);



