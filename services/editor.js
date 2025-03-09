let files = JSON.parse(localStorage.getItem("files")) || {};
        let currentFile = null, autosave = true;

        function toggleSidebar() { document.querySelector(".sidebar").classList.toggle("hidden"); }
        function toggleMenu() { document.getElementById("menu").classList.toggle("show"); }
        function updateFileList() {
            let list = document.getElementById("file-list"); list.innerHTML = "";
            Object.keys(files).forEach(file => {
                let li = document.createElement("li");
                li.innerHTML = `<span onclick="loadFile('${file}')">${file}</span>`;
                list.appendChild(li);
            });
        }
        function searchFiles() {
            let query = document.getElementById("search-bar").value.toLowerCase();
            document.querySelectorAll("#file-list li").forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(query) ? "flex" : "none";
            });
        }
        function newFile() {
            let name = prompt("Enter file name:", "Untitled.md");
            if (!name || files[name]) return;
            files[name] = ""; saveToLocalStorage(); updateFileList(); loadFile(name);
        }
        function renameFile() {
            if (!currentFile) return alert("No file selected!");
            let newName = prompt("Rename file:", currentFile);
            if (!newName || files[newName]) return;
            files[newName] = files[currentFile]; delete files[currentFile];
            currentFile = newName; saveToLocalStorage(); updateFileList();
        }
        function deleteFile() {
            if (!currentFile) return alert("No file selected!");
            if (!confirm(`Delete "${currentFile}"?`)) return;
            delete files[currentFile]; currentFile = null;
            saveToLocalStorage(); updateFileList();
        }
        function toggleAutosave() { autosave = document.getElementById("autosave-toggle").checked; }
        function handleChange() {
            if (autosave) saveFile();
            document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
        }
        function saveFile() {
            if (!currentFile) return;
            files[currentFile] = document.getElementById("editor").value;
            saveToLocalStorage();
        }
        function loadFile(file) {
            currentFile = file;
            document.getElementById("editor").value = files[file];
            document.getElementById("preview").innerHTML = marked.parse(files[file]);
        }
        function changeViewMode() {
            let mode = document.getElementById("view-mode").value;
            let editor = document.getElementById("editor"), preview = document.getElementById("preview");
            document.body.classList.remove("both-mode");
            if (mode === "editor") { editor.style.display = "block"; preview.style.display = "none"; }
            else if (mode === "markdown") { editor.style.display = "none"; preview.style.display = "block"; }
            else { editor.style.display = "block"; preview.style.display = "block"; document.body.classList.add("both-mode"); }
        }
        function saveToLocalStorage() { localStorage.setItem("files", JSON.stringify(files)); }
        updateFileList();