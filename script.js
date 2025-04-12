document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("habit-form");
    const input = document.getElementById("habit-input");
    const list = document.getElementById("habit-items");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // This prevents page reload
  
      const habit = input.value.trim();
  
      if (habit !== "") {
        const newHabit = document.createElement("li");
        newHabit.textContent = habit;
        list.appendChild(newHabit);
        input.value = ""; // Reset input
      }
    });
  });