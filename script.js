
        // Typewriter effect with backspacing
        const wordText = "Everything you need to K N O W";
        let wordIndex = 0;
        let isDeleting = false;
        function typeWord() {
            let displayText = wordText.substring(0, wordIndex);
            document.getElementById("word-idk").textContent = displayText;
            if (!isDeleting && wordIndex < wordText.length) {
                wordIndex++;
                setTimeout(typeWord, 100);
            } else if (isDeleting && wordIndex > 0) {
                wordIndex--;
                setTimeout(typeWord, 50);
            } else {
                isDeleting = !isDeleting;
                setTimeout(typeWord, 1000);
            }
        }
        setTimeout(typeWord, 1000);

        // Typewriter effect for Services button
        const servicesTexts = ["Check our work", "What did we make?", "Explore our projects"];
        let serviceIndex = 0;
        function typewriterServices() {
            let btn = document.getElementById("services-btn");
            btn.textContent = servicesTexts[serviceIndex];
            serviceIndex = (serviceIndex + 1) % servicesTexts.length;
            setTimeout(typewriterServices, 2000);
        }
        typewriterServices();

        // FAQ Toggle Functionality
        function toggleFAQ(faqItem) {
            const answer = faqItem.querySelector(".faq-answer");
            answer.style.display = answer.style.display === "none" || answer.style.display === "" ? "block" : "none";
        }