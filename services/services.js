function filterServices() {
            let input = document.getElementById("search").value.toLowerCase();
            document.querySelectorAll(".card").forEach(card => {
                let name = card.getAttribute("data-name").toLowerCase();
                card.style.display = name.includes(input) ? "block" : "none";
            });
        }

        function togglePin(serviceName, heartIcon) {
            let pinnedServices = JSON.parse(localStorage.getItem("pinnedServices")) || [];

            if (pinnedServices.includes(serviceName)) {
                pinnedServices = pinnedServices.filter(name => name !== serviceName);
            } else {
                pinnedServices.push(serviceName);
            }

            localStorage.setItem("pinnedServices", JSON.stringify(pinnedServices));
            renderServices();
        }

        function renderServices() {
            let pinnedServices = JSON.parse(localStorage.getItem("pinnedServices")) || [];
            let allCards = Array.from(document.querySelectorAll(".card"));
            let pinnedContainer = document.getElementById("pinned-services");
            let allContainer = document.getElementById("all-services");

            pinnedContainer.innerHTML = "";
            allContainer.innerHTML = "";

            allCards.forEach(card => {
                let serviceName = card.getAttribute("data-name");
                let heartIcon = card.querySelector(".heart");

                if (pinnedServices.includes(serviceName)) {
                    heartIcon.innerText = "🩶";
                    heartIcon.classList.add("pinned");
                    heartIcon.classList.remove("unpinned");
                    pinnedContainer.appendChild(card);
                } else {
                    heartIcon.innerText = "❤️";
                    heartIcon.classList.add("unpinned");
                    heartIcon.classList.remove("pinned");
                    allContainer.appendChild(card);
                }
            });
        }

        document.addEventListener("DOMContentLoaded", renderServices);