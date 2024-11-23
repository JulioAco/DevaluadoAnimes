        function toggleSynopsis(button) {
            var synopsis = button.parentNode;
            if (synopsis.classList.contains('expandable')) {
                synopsis.classList.remove('expandable');
                button.textContent = 'Ver más';
            } else {
                synopsis.classList.add('expandable');
                button.textContent = 'Ver menos';
            }
        }

        function toggleSabiondosContent() {
            var content = document.querySelector('.sabiondos-content');
            var buttonSpan = document.querySelector('.sabiondos-btn span');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                buttonSpan.textContent = '🔼';
            } else {
                content.style.display = 'none';
                buttonSpan.textContent = '🔽';
            }
        }
                function toggleSubLinks(element) {
    var subLinks = element.parentElement.querySelector('.sub-links');
    if (subLinks.style.display === "block") {
        subLinks.classList.remove('show');
        setTimeout(function() {
            subLinks.style.display = "none";
        }, 500);
    } else {
        subLinks.style.display = "block";
        setTimeout(function() {
            subLinks.classList.add('show');
        }, 10);
    }
        }
