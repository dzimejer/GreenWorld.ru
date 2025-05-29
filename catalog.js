function openModal() {
      document.getElementById('modal').classList.add('active');
    }
    document.querySelector('.modal').addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });