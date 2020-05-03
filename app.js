document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.createElement('button');
    // add HTML to button
    addButton.innerHTML = "Sing";
    // attach classname to button (used to keep button on it's own line)
    addButton.className = "button"
    // add button to the body
    document.body.appendChild(addButton);

    addButton.addEventListener("click", function () {
        let friends = ['Matt', 'Joe', 'Danica', 'MeiLee', 'Nikki'];

        for (let i = 0; i < friends.length; ++i) {
            let name = friends[i]
            console.log(name.toUpperCase());

            for (let l = 99; l > 0; l--) {
                let line = l - 1;
                if (l == 1) {
                    // last line of code
                    console.log(l + ' line of code in the file, ' + l + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file')
                } else if (l == 2) {
                    // second to last line of code
                    console.log(l + ' lines of code in the file, ' + l + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + line + ' line of code in the file')
                } else {
                    // all lines of 99-2
                    console.log(l + ' lines of code in the file, ' + l + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + line + ' lines of code in the file')
                }
            };
        }
    })
})