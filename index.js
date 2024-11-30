document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    {
      id: 1,
      question: "1. Jika KODE adalah 19154, maka berapakah BEDA?",
      options: ["2454", "2544", "2445", "2545"],
      correctAnswer: "2454"
    },
    {
      id: 2,
      question: "2. Pilih kata yang tidak berhubungan dengan yang lain:",
      options: ["Apel", "Jeruk", "Pisang", "Wortel"],
      correctAnswer: "Wortel"
    },
    {
      id: 3,
      question: "3. Lanjutkan urutan berikut: 2, 4, 8, 16, ...",
      options: ["24", "28", "32", "36"],
      correctAnswer: "32"
    },
    {
      id: 4,
      question: "4. Jika semua Flurbs adalah Floobs, dan beberapa Floobs adalah Fleebs, maka:",
      options: [
        "Semua Flurbs adalah Fleebs",
        "Beberapa Flurbs mungkin Fleebs",
        "Tidak ada Flurbs yang Fleebs",
        "Semua Fleebs adalah Flurbs"
      ],
      correctAnswer: "Beberapa Flurbs mungkin Fleebs"
    },
    {
      id: 5,
      question: "5. Berapa banyak segitiga dalam gambar ini?",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6mwAvV6_585GGvGFqBI1sAAJr_7wEPywl9w5rjE1jmg4VIs4AI4qyZr7cc_l1UylHn1_JpZ8V5EaRwL8_zNk5schBVX_4tLRauyBkCtWbn8zK1ZnvX_MB6hNrOANNPtwr-Td5df1HOp4/s320/ada+berapa+segitiga.GIF",
      options: ["25", "16", "27", "20"],
      correctAnswer: "27"
    },
    {
      id: 6,
      question: "6. Jika hari ini hari Senin, apa hari 100 hari dari sekarang?",
      options: ["Senin", "Selasa", "Rabu", "Kamis"],
      correctAnswer: "Rabu"

    },
    {
      id: 7,
      question: "7. Pilih angka yang hilang dalam urutan: 7, 12, 19, 28, ?",
      options: ["35", "37", "39", "41"],
      correctAnswer: "39"

    },
    {
      id: 8,
      question: "8. Jika HIJAU = 89, MERAH = 72, maka BIRU = ?",
      options: ["52", "62", "72", "82"],
      correctAnswer: "62"

    },
    {
      id: 9,
      question: "9. Manakah yang tidak termasuk dalam kelompok?",
      options: ["Gajah", "Singa", "Paus", "Harimau"],
      correctAnswer: "Paus"

    },
    {
      id: 10,
      question: "10. Berapa menit dalam 2,5 jam?",
      options: ["120", "130", "140", "150"],
      correctAnswer: "150"

    },
    {
      id: 11,
      question: "11. Manakah gambar yang tidak termasuk dalam kelompok?",
      options: [
        { imageUrl: "data:image/jpeg;base64,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", text: "A" },
        { imageUrl: "https://image.popmama.com/content-images/post/20211016/segitigajpg-a255baab7841f1f183bc8880a97a0b9b.jpg", text: "B" },
        { imageUrl: "https://image.popmama.com/content-images/post/20211016/persegijpg-4212e71600dd3430c142d5f803e03e36.jpg", text: "C" },
        { imageUrl: "https://image.popmama.com/content-images/post/20211016/persegi-panjangjpg-e4525a1b6b43aa4058ee5c26c7d77c3c.jpg", text: "D" }

      ],
      correctAnswer: "A"

    },
    {
      id: 12,
      question: "12. Jika MAKAN = 13114, TIDUR = 20409, maka BANGUN = ?",
      options: ["211495", "211594", "221494", "221595"],
      correctAnswer: "221494"
    },
    {
      id: 13,
      question: "13. Jika 6 pekerja dapat menyelesaikan sebuah proyek dalam 12 hari, berapa lama waktu yang dibutuhkan 8 pekerja untuk menyelesaikan proyek yang sama?",
      options: ["8 hari", "9 hari", "10 hari", "11 hari"],
      correctAnswer: "9 hari"
    },
    {
      id: 14,
      question: "14. Jika 5 orang dapat menyelesaikan 5 proyek dalam 5 hari, berapa lama waktu yang dibutuhkan 10 orang untuk menyelesaikan 10 proyek?",
      options: ["5 hari", "10 hari", "15 hari", "20 hari"],
      correctAnswer: "5 hari"
    },
    {
      id: 15,
      question: "15. Pilih gambar yang berbeda dari yang lain:",
      options: [
        { imageUrl: "https://png.pngtree.com/png-clipart/20220930/original/pngtree-red-apple-fruits-sweet-png-image_8646096.png", text: "A" },
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpIzsPFitRnr0JjQ0c87ll_mn3DzyPYNvEA&s", text: "B" },
        { imageUrl: "data:image/jpeg;base64,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", text: "C" },
        { imageUrl: "data:image/png;base64,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", text: "D" }
      ],
      correctAnswer: "D"

    }
  ];
  const essayQuestions = [
    {
      id: 1,
      question: "1. Jelaskan konsep pemanasan global dan dampaknya terhadap lingkungan."
    },
    {
      id: 2,
      question: "2. Apa yang dimaksud dengan keanekaragaman hayati? Berikan contoh pentingnya menjaga keanekaragaman hayati."
    },
    {
      id: 3,
      question: "3. Jelaskan proses fotosintesis pada tumbuhan dan mengapa proses ini penting bagi kehidupan di bumi."
    },
    {
      id: 4,
      question: "4. Apa yang dimaksud dengan energi terbarukan? Berikan contoh dan jelaskan keuntungannya."
    },
    {
      id: 5,
      question: "5. Jelaskan teori evolusi Darwin dan berikan contoh bukti yang mendukung teori tersebut."
    }
  ];

  const numQuestions = questions.length;
  const questionsContainer = document.getElementById('questions-container');
  const questionsEssay = document.getElementById('questions-container-essay');
  const navButtonsContainer = document.getElementById('nav-buttons-container');
  const navButtonsContainerEssay = document.getElementById('nav-buttons-essay');


  // Generate Question Cards Dynamically
  questions.forEach((data, index) => {
    const questionId = index + 1;
    let questionCard;
  
    if (data.options[0] && typeof data.options[0] === 'object' && data.options[0].imageUrl) {
      // Untuk pertanyaan dengan opsi berbasis gambar
      questionCard = `
        <div class="question-card">
          <div class="question-text">${data.question}</div>
          ${data.imageUrl ? `<img src="${data.imageUrl}" alt="Gambar Pertanyaan" class="question-image">` : ''}
          <div class="options-and-unsure">
            <div class="options image-options">
              ${data.options.map(option => `
                <div class="image-option" data-question="${questionId}" data-answer="${option.text}">
                  <img src="${option.imageUrl}" alt="${option.text}">
                  <span>${option.text}</span>
                </div>
              `).join('')}
            </div>
            <div class="unsure">
              <input type="checkbox" id="unsure${questionId}" data-question="${questionId}">
              <label for="unsure${questionId}">Ragu-ragu</label>
            </div>
          </div>
        </div>
      `;
    } else {
      // Untuk pertanyaan dengan opsi berbasis teks
      questionCard = `
        <div class="question-card">
          <div class="question-text">${data.question}</div>
          ${data.imageUrl ? `<img src="${data.imageUrl}" alt="Gambar Pertanyaan" class="question-image">` : ''}
          <div class="options-and-unsure">
            <div class="options">
              ${data.options.map(option => `
                <div class="option" data-question="${questionId}">
                  <span>${option}</span>
                </div>
              `).join('')}
            </div>
            <div class="unsure">
              <input type="checkbox" id="unsure${questionId}" data-question="${questionId}">
              <label for="unsure${questionId}">Ragu-ragu</label>
            </div>
          </div>
        </div>
      `;
    }
  
    // Tambahkan kartu pertanyaan ke container
    questionsContainer.innerHTML += questionCard;
  });
  
  // // Generate Navigation Buttons Dynamically
  for (let i = 1; i <= numQuestions; i++) {
    const navButton = document.createElement('button');
    navButton.classList.add('nav-button');
    navButton.textContent = i;
    navButton.id = `nav-btn-${i}`;
    navButtonsContainer.appendChild(navButton);
  }

  function selectOption(option) {
    const questionId = option.getAttribute('data-question');
    const navButton = document.getElementById(`nav-btn-${questionId}`);

    // Hapus kelas 'active' dari semua opsi dalam pertanyaan yang sama
    const questionCard = option.closest('.question-card');
    questionCard.querySelectorAll('.option, .image-option').forEach(opt => {
      opt.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke opsi yang dipilih
    option.classList.add('active');

    // Tambahkan kelas 'active' ke tombol navigasi
    navButton.classList.add('active');

    updateProgress('mcq');
  }

  function handleEssayInput(textarea) {
    const questionId = textarea.closest('.essay-question').id.split('-')[2];
    const navButton = document.getElementById(`nav-btn-essay-${questionId}`);

    if (textarea.value.trim() !== '') {
      navButton.classList.add('answered');
    } else {
      navButton.classList.remove('answered');
    }

    updateProgress('essay');
  }

  // Function to handle unsure checkbox
  function toggleUnsure(checkbox) {
    const questionId = checkbox.getAttribute('data-question');
    const navButton = document.getElementById(`nav-btn-${questionId}`);

    if (checkbox.checked) {
      navButton.classList.add('unsure-active');
    } else {
      navButton.classList.remove('unsure-active');
    }
  }

  function scrollToEssayQuestion(questionId) {
    const questionCard = document.querySelector(`essay-question-${questionId}`);
    if (questionCard) {
      questionCard.classList.add("blink"); // Add blink class

      questionCard.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling animation
        block: 'start'      // Scroll to the top of the question card
      });

      // Remove the blink class after the animation completes (1.1s)
      setTimeout(() => {
        questionCard.classList.remove("blink");
      }, 1100);
    }
  }

  // Add event listeners to all options
  document.querySelectorAll('.option, .image-option').forEach((option) => {
    option.addEventListener('click', function () {
      selectOption(this);
    });
  });

  // Add event listeners to all unsure checkboxes
  document.querySelectorAll('.unsure input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      toggleUnsure(this);
    });
  });

  // Add event listeners to navigation buttons
  document.querySelectorAll('.nav-button').forEach((navButton) => {
    navButton.addEventListener('click', function () {
      const questionId = this.textContent;
      scrollToQuestion(questionId);
    });
  });

  // Fungsi untuk menampilkan modal peringatan
  function showTimeWarningModal() {
    const modal = document.getElementById('timeWarningModal');
    modal.style.display = 'block';

    // Event listener untuk menutup modal
    const closeWarningButton = document.getElementById('closeWarning');
    closeWarningButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  // Memanggil fungsi showTimeWarningModal ketika waktu tersisa 10 menit
  function checkTimeRemaining(timer) {
    if (timer === 600) { // 600 detik = 10 menit
      showTimeWarningModal();
    }
  }

  // Memperbarui fungsi startTimer untuk memanggil checkTimeRemaining
  function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    timerInterval = setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      checkTimeRemaining(timer); // Cek waktu tersisa

      if (--timer < 0) {
        clearInterval(timerInterval);
        // Logika ketika waktu habis
      }
    }, 1000);
  }

  // Start the timer when the page loads
  window.onload = function () {
    const twentyMinutes = 60 * 60, // 20 menit untuk pengujian
      display = document.querySelector('.timer');
    startTimer(twentyMinutes, display);
  };

  function pauseTimer() {
    clearInterval(timerInterval); // Hentikan interval timer
  }
  function updateProgress(type) {
    if (type === 'mcq') {
      const totalMCQ = questions.length;
      const answeredMCQ = document.querySelectorAll('.option.active, .image-option.active').length;
      const mcqProgress = (answeredMCQ / totalMCQ) * 100;

      // Tampilkan progress bar MCQ dan sembunyikan progress bar esai
      document.getElementById('mcq-progress').style.display = 'block';
      document.getElementById('essay-progress').style.display = 'none';
      document.getElementById('mcq-progress').style.width = mcqProgress + '%';
    } else if (type === 'essay') {
      const totalEssay = essayQuestions.length;
      const answeredEssay = document.querySelectorAll('.essay-answer:not(:placeholder-shown)').length;
      const essayProgress = (answeredEssay / totalEssay) * 100;

      // Tampilkan progress bar esai dan sembunyikan progress bar MCQ
      document.getElementById('mcq-progress').style.display = 'none';
      document.getElementById('essay-progress').style.display = 'block';
      document.getElementById('essay-progress').style.width = essayProgress + '%';
    }
  }

  // Function to show modal
  function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  // Function to hide modal
  function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  //ESSAY
  essayQuestions.forEach((question, index) => {
    const essayQuestionHTML = `
      <div class="question-card essay-question" id="essay-question-${question.id}">
          <div class="question-text">${question.question}</div>
          <textarea class="essay-answer" rows="5" placeholder="Tulis jawaban Anda di sini..."></textarea>
      </div>
      `;
    questionsEssay.innerHTML += essayQuestionHTML;
  });

  essayQuestions.forEach((question, index) => {
    // Tambahkan event listener untuk textarea esasay
    // Buat tombol navigasi untuk setiap pertanyaan esai
    const navButton = document.createElement('button');
    navButton.classList.add('nav-button', 'essay');
    navButton.textContent = `E${index + 1}`;
    navButton.id = `nav-btn-essay-${question.id}`;
    navButton.addEventListener('click', function () {
      scrollToEssayQuestion(question.id);
    });
    navButtonsContainerEssay.appendChild(navButton);

  });



  function initializeExam() {

    const abc = document.querySelectorAll(".essay-question")

    abc.forEach(async (elemen) => { elemen.style.display = "none" })


    const questionsContainer = document.getElementById('questions-container');
    const navButtonsContainer = document.getElementById('nav-buttons-container');
    if (!questionsContainer || !navButtonsContainer) {
      console.error('Questions container or navigation buttons container not found');
      return;
    }

    // Tambahkan header exam
    const examHeader = document.createElement('div');
    examHeader.className = 'exam-title';
    examHeader.innerHTML = `
      <h1>Ujian Psikotes</h1>
      <p>Jawablah pertanyaan berikut dengan teliti. Pilih satu jawaban yang paling tepat untuk setiap pertanyaan pilihan ganda.</p>
    `;
    questionsContainer.appendChild(examHeader);

    // Inisialisasi pertanyaan pilihan ganda
    questions.forEach((question, index) => {
      const questionHTML = `
      <div class="question-card" id="question-${question.id}">
        <div class="question-text">${question.question}</div>
        <div class="options-container">
          ${question.options.map(option => {
        if (typeof option === 'object' && option.imageUrl) {
          return `
                <div class="image-option" data-question="${question.id}" data-answer="${option.text}">
                  <img src="${option.imageUrl}" alt="${option.text}">
                  <span>${option.text}</span>
                </div>
              `;
        } else {
          return `<div class="option" data-question="${question.id}">${option}</div>`;
        }
      }).join('')}
        </div>
        <div class="unsure">
          <input type="checkbox" id="unsure-${question.id}">
          <label for="unsure-${question.id}">Ragu-ragu</label>
        </div>
      </div>
    `;
      questionsContainer.innerHTML += questionHTML;
    });

    // Inisialisasi tombol navigasi untuk pilihan ganda
    for (let i = 1; i <= questions.length; i++) {
      const navButton = document.createElement('button');
      navButton.classList.add('nav-button', 'mcq');
      navButton.textContent = i;
      navButton.id = `nav-btn-${i}`;
      navButton.addEventListener('click', function () {
        scrollToQuestion(i);
      });
      navButtonsContainer.appendChild(navButton);
    }

    document.querySelectorAll('.option, .image-option').forEach(option => {
      option.addEventListener('click', function () {
        selectOption(this);
      });
    });

    // Event listener untuk textarea esai
    // document.querySelectorAll('.essay-answer').forEach(textarea => {
    //   textarea.addEventListener('input', function () {
    //     handleEssayInput(this);
    //   });
    // });

    // Event listener untuk checkbox ragu-ragu
    document.querySelectorAll('.unsure input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        const questionId = this.id.split('-')[1];
        const navButton = document.getElementById(`nav-btn-${questionId}`);
        if (this.checked) {
          navButton.classList.add('unsure');
        } else {
          navButton.classList.remove('unsure');
        }
      });
    });

    // Tambahkan event listener untuk tombol "Submit"
    document.getElementById('submit-exam').addEventListener('click', submitExam);

    // Tambahkan event listener untuk tombol "Submit" di bagian esai
    document.getElementById('submit-exam').addEventListener('click', submitEssay); // Pastikan ini ada

    // Mulai timer
    startTimer();

    // Update progress bar awal
    updateProgress('mcq');

    // Tampilkan tombol submit untuk pilihan ganda
    const submitExamButton = document.createElement('button');
    submitExamButton.textContent = 'Submit';
    submitExamButton.classList.add('btn', 'btn-primary');
    submitExamButton.onclick = submitExam; // Panggil fungsi submitExam saat tombol diklik
    questionsContainer.appendChild(submitExamButton); // Tambahkan tombol submit ke kontainer

    // Tambahkan tombol "Tinjau Kembali Jawaban"
    const reviewAnswersButton = document.createElement('button');
    reviewAnswersButton.textContent = 'Tinjau Kembali Jawaban';
    reviewAnswersButton.classList.add('btn', 'btn-secondary');
    reviewAnswersButton.onclick = function () {
      // Logika untuk meninjau kembali jawaban
      console.log('Meninjau kembali jawaban...');
      // Anda bisa menambahkan logika untuk menampilkan jawaban yang telah dipilih
    };
    questionsContainer.appendChild(reviewAnswersButton); // Tambahkan tombol ke kontainer


    // Atur posisi tombol
    submitExamButton.style.float = 'left'; // Tombol submit di kiri
    reviewAnswersButton.style.float = 'right'; // Tombol tinjau kembali di kanan

    // Tampilkan tombol submit untuk pilihan ganda
    document.getElementById('submit-exam').style.display = 'block'; // Tampilkan tombol submit pilihan ganda
    document.getElementById('go-to-essay').style.display = 'block'; // Tampilkan tombol go to essay


  }

  // Fungsi untuk menggulir ke pertanyaan tertentu
  // Tambahkan fungsi ini
  function scrollToQuestion(questionId) {
    const questionCard = document.querySelector(`.question-card:nth-of-type(${questionId})`);
    if (questionCard) {
      questionCard.classList.add("blink"); // Add blink class

      questionCard.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling animation
        block: 'start'      // Scroll to the top of the question card
      });

      // Remove the blink class after the animation completes (1.1s)
      setTimeout(() => {
        questionCard.classList.remove("blink");
      }, 1100);
    }
  }

  // Panggil initializeExam saat halaman dimuat
  document.addEventListener('DOMContentLoaded', initializeExam);

  // Function to submit exam
  function submitExam() {
    const numQuestions = questions.length;
    let answeredQuestions = 0;
    let correctAnswers = 0;
    let markedUnsure = 0;

    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`.option[data-question="${index + 1}"].active, .image-option[data-question="${index + 1}"].active`);
      if (selectedOption) {
        answeredQuestions++;
        if (selectedOption.textContent.trim() === question.correctAnswer || selectedOption.getAttribute('data-answer') === question.correctAnswer) {
          correctAnswers++;
        }
      }
      if (document.getElementById(`unsure${index + 1}`).checked) {
        markedUnsure++;
      }
    });

    const unansweredQuestions = numQuestions - answeredQuestions;
    const wrongAnswers = answeredQuestions - correctAnswers;

    // Hitung nilai
    const nilai = (correctAnswers / numQuestions) * 100;
    const nilaiFormatted = nilai.toFixed(2).padStart(5, '0');

    const summaryHTML = `
      <div class="summary-item">
        <span class="summary-label">Total Pertanyaan:</span>
        <span class="summary-value">${numQuestions}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Pertanyaan Dijawab:</span>
        <span class="summary-value">${answeredQuestions}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Pertanyaan Belum Dijawab:</span>
        <span class="summary-value">${unansweredQuestions}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Ditandai Ragu-ragu:</span>
        <span class="summary-value">${markedUnsure}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Jawaban Benar:</span>
        <span class="summary-value">${correctAnswers}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Jawaban Salah:</span>
        <span class="summary-value">${wrongAnswers}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Nilai:</span>
        <span class="summary-value">${nilaiFormatted}</span>
      </div>
    `;

    document.getElementById('examSummary').innerHTML = summaryHTML;
    showModal('examSummaryModal');
  }

  // Event listener for submit button
  document.getElementById('submit-exam').addEventListener('click', submitExam);

  // Event listener for close button in modal
  document.querySelector('#examSummaryModal .close').addEventListener('click', () => {
    hideModal('examSummaryModal');
  });

  // Event listener for "Lanjut ke Sesi Berikutnya" button
  document.getElementById('confirm-next-session').addEventListener('click', () => {
    hideModal('examSummaryModal');
    // displayEssayQuestions();
  });

  // Event listener for "Tinjau Kembali Jawaban" button
  document.getElementById('review-exam').addEventListener('click', () => {
    hideModal('examSummaryModal');
    const unansweredQuestions = document.querySelectorAll('.question-card:not(:has(.option.active, .image-option.active))');
    unansweredQuestions.forEach(question => {
      question.classList.add('blink');
      setTimeout(() => {
        question.classList.remove('blink');
      }, 5000);
    });
  });

  // Event listener untuk tombol "Tunda Ujian"
  document.getElementById('pause-exam').addEventListener('click', () => {
    console.log("Tombol 'Tunda Ujian' diklik"); // Debugging
    showModal('pauseModal'); // Tampilkan modal penundaan
  });

  // Event listener untuk tombol "Ya, Tunda Ujian"
  document.getElementById('confirm-pause').addEventListener('click', () => {
    pauseTimer(); // Hentikan timer
    closeModal('pauseModal'); // Sembunyikan modal penundaan
    showPauseConfirmationModal(); // Tampilkan modal konfirmasi penundaan
  });

  // Event listener untuk tombol "Tidak, Lanjutkan Ujian"
  document.getElementById('cancel-pause').addEventListener('click', () => {
    hideModal('pauseModal'); // Sembunyikan modal penundaan
  });

  document.getElementById('go-to-essay').addEventListener('click', function () {
    displayEssayQuestions(); // Panggil fungsi untuk menampilkan pertanyaan esai
  });

  // Event listener untuk tombol "OK" di modal konfirmasi penundaan
  document.getElementById('okPauseConfirmation').addEventListener('click', function () {
    document.getElementById('pauseConfirmationModal').style.display = 'none'; // Menutup modal
  });

  // Event listener untuk menutup modal ketika tanda silang diklik
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('pauseConfirmationModal').style.display = 'none';
  });

  // Fungsi untuk menampilkan modal konfirmasi penundaan
  function showPauseConfirmationModal() {
    const modal = document.getElementById('pauseConfirmationModal');
    modal.style.display = 'block';

    // Event listener untuk menutup modal
    document.getElementById('closePauseConfirmation').addEventListener('click', function () {
      document.getElementById('pauseConfirmationModal').style.display = 'none';
    });
  }

  // Tambahkan fungsi untuk menutup modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Tambahkan event listener untuk tombol silang di modal penundaan
  document.querySelector('#pauseModal .close').addEventListener('click', function () {
    closeModal('pauseModal');
  });

  function showMultipleChoiceQuestions() {
    const essayContainer = document.getElementById('essay-container');
    const questionsContainer = document.getElementById('questions-container');
    const navButtonsContainer = document.getElementById('nav-buttons-container');
    questionsContainer.innerHTML = '';
    navButtonsContainer.innerHTML = '';

    // Kosongkan kontainer pertanyaan
    questionsContainer.innerHTML = '';

    // Isi kontainer dengan pertanyaan pilihan ganda
    questions.forEach((question) => {
      const questionHTML = `
        <div class="question-card" id="question-${question.id}">
            <div class="question-text">${question.question}</div>
            <div class="options">
                ${question.options.map(option => `
                    <input type="radio" name="question-${question.id}" value="${option}" id="option-${question.id}-${option}">
                    <label for="option-${question.id}-${option}">${option}</label>
                `).join('')}
            </div>
        </div>
        `;
      questionsContainer.innerHTML += questionHTML;
    });

    // Sembunyikan kontainer esai
    essayContainer.style.display = 'none';

    // Tampilkan tombol submit untuk pilihan ganda
    const submitExamButton = document.createElement('button');
    submitExamButton.textContent = 'Submit';
    submitExamButton.classList.add('btn', 'btn-primary');
    submitExamButton.onclick = submitExam; // Panggil fungsi submitExam saat tombol diklik
    questionsContainer.appendChild(submitExamButton); // Tambahkan tombol submit ke kontainer

    // Tambahkan tombol "Tinjau Kembali Jawaban"
    const reviewAnswersButton = document.createElement('button');
    reviewAnswersButton.textContent = 'Tinjau Kembali Jawaban';
    reviewAnswersButton.classList.add('btn', 'btn-secondary');
    reviewAnswersButton.onclick = function () {
      // Logika untuk meninjau kembali jawaban
      console.log('Meninjau kembali jawaban...');
      // Anda bisa menambahkan logika untuk menampilkan jawaban yang telah dipilih
    };
    questionsContainer.appendChild(reviewAnswersButton); // Tambahkan tombol ke kontainer

    // Atur posisi tombol
    submitExamButton.style.float = 'left'; // Tombol submit di kiri
    reviewAnswersButton.style.float = 'right'; // Tombol tinjau kembali di kanan

    // Tampilkan tombol submit untuk pilihan ganda
    document.getElementById('submit-exam').style.display = 'block'; // Tampilkan tombol submit pilihan ganda
    document.getElementById('go-to-essay').style.display = 'block'; // Tampilkan tombol go to essay
  }

  // Modify displayEssayQuestions function
  function displayEssayQuestions() {
    const questionsContainerPilihanGanda = document.getElementById('questions-container');
    const questionsContainer = document.getElementById('questions-container-essay');

    const navButtonsContainer = document.getElementById('nav-buttons-container');
    // questionsContainer.innerHTML = '';
    navButtonsContainer.style.display = "none"
    questionsContainerPilihanGanda.style.display = "none"
    questionsContainer.style.display = "block"

    const navButtonsContainerEssay = document.getElementById('nav-buttons-essay');
    // questionsContainer.innerHTML = '';
    navButtonsContainerEssay.style.display = "grid"


    document.querySelectorAll('.essay-answer').forEach(textarea => {
      textarea.addEventListener('input', function () {
        handleEssayInput(this);
      });
    });
    // Sembunyikan tombol submit untuk pilihan ganda
    document.getElementById('submit-exam').style.display = 'none';
    // document.getElementById('submit-essay').style.display = 'none';

    document.getElementById('go-to-essay').style.display = 'none';

    document.querySelector(".submit-container-essay").innerHTML = ""
    document.querySelector(".submit-container-essay").style.display = "flex"


    // Tambahkan tombol "Go to Multiple Choice"
    const goToMCQBtn = document.createElement('button');
    goToMCQBtn.textContent = '<< Pilihan Ganda';
    goToMCQBtn.classList.add('btn', 'btn-primary');
    goToMCQBtn.onclick = function () {
      document.querySelector("#questions-container").style.display = "block"
      document.querySelector("#questions-container-essay").style.display = "none"

      // const bcd = document.querySelector("#questions-container")
      // initializeExam(); // Panggil fungsi untuk menampilkan pertanyaan pilihan ganda
      document.getElementById('submit-exam').style.display = 'block'; // Tampilkan tombol submit pilihan ganda
      document.getElementById('go-to-essay').style.display = 'block'; // Tampilkan tombol go to essay
      document.getElementById('nav-buttons-container').style.display = 'grid'
      document.getElementById('nav-buttons-essay').style.display = 'none'
      document.querySelector(".submit-container-essay").style.display = "none"

    }
    //Tampilkan tombol submit untuk esai
    const submitEssayBtn = document.createElement('button');
    submitEssayBtn.textContent = 'Submit';
    submitEssayBtn.classList.add('btn', 'btn-primary');
    submitEssayBtn.onclick = submitEssay;
    document.querySelector(".submit-container-essay").appendChild(goToMCQBtn); // Tambahkan tombol ke kontainer
    document.querySelector(".submit-container-essay").appendChild(submitEssayBtn); // Tambahkan tombol submit ke kontainer



    updateProgress('essay');


  }

  document.addEventListener('DOMContentLoaded', function () {
    // Tambahkan event listener untuk tombol "Go to Multiple Choice"
    const goToMCQBtn = document.getElementById('go-to-essay'); // Pastikan ID ini sesuai
    if (goToMCQBtn) {
      goToMCQBtn.addEventListener('click', showMultipleChoiceQuestions);
    } else {
      console.error('Tombol untuk pergi ke pilihan ganda tidak ditemukan');
    }

  });

  function submitEssay() {
    const essayAnswers = document.querySelectorAll('.essay-answer');
    let allAnswered = true;

    essayAnswers.forEach(answer => {
      if (answer.value.trim() === '') {
        allAnswered = false;
        answer.classList.add('error');
      } else {
        answer.classList.remove('error');
      }
    });

    if (allAnswered) {
      showReviewModal();
    } else {
      showAlert('Mohon jawab semua pertanyaan esai sebelum submit.');
    }
  }

  function submitExam() {
    const numQuestions = questions.length;
    let answeredQuestions = 0;
    let correctAnswers = 0;
    let markedUnsure = 0;

    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`.option[data-question="${index + 1}"].active, .image-option[data-question="${index + 1}"].active`);
      if (selectedOption) {
        answeredQuestions++;
        if (selectedOption.textContent.trim() === question.correctAnswer || selectedOption.getAttribute('data-answer') === question.correctAnswer) {
          correctAnswers++;
        }
      }
      if (document.getElementById(`unsure${index + 1}`).checked) {
        markedUnsure++;
      }
    });

    const unansweredQuestions = numQuestions - answeredQuestions;
    const wrongAnswers = answeredQuestions - correctAnswers;

    // Cek apakah semua pertanyaan telah dijawab
    if (unansweredQuestions > 0) {
      showAlertPilgan('Mohon jawab semua pertanyaan pilihan ganda sebelum submit.'); // Tampilkan pesan peringatan
      return; // Hentikan eksekusi fungsi jika ada pertanyaan yang belum dijawab
    }

    // Hitung nilai
    const nilai = (correctAnswers / numQuestions) * 100;
    const nilaiFormatted = nilai.toFixed(2).padStart(5, '0');

    const summaryHTML = `
        <div class="summary-item">
            <span class="summary-label">Total Pertanyaan:</span>
            <span class="summary-value">${numQuestions}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Pertanyaan Dijawab:</span>
            <span class="summary-value">${answeredQuestions}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Pertanyaan Belum Dijawab:</span>
            <span class="summary-value">${unansweredQuestions}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Ditandai Ragu-ragu:</span>
            <span class="summary-value">${markedUnsure}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Jawaban Benar:</span>
            <span class="summary-value">${correctAnswers}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Jawaban Salah:</span>
            <span class="summary-value">${wrongAnswers}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Nilai:</span>
            <span class="summary-value">${nilaiFormatted}</span>
        </div>
    `;

    document.getElementById('examSummary').innerHTML = summaryHTML;
    showModal('examSummaryModal');
  }

  function showReviewModal() {
    const reviewModal = document.getElementById('essayReviewModal');
    if (reviewModal) {
      reviewModal.style.display = 'block';
    } else {
      console.error('Modal review tidak ditemukan');
    }
  }

  function showAlert(message) {
    document.getElementById('alertMessage').textContent = message; // Set pesan
    document.getElementById('alertModal').style.display = 'block'; // Tampilkan modal
  }

  function showAlertPilgan(message) {
    document.getElementById('alertMessagePilgan').textContent = message; // Set pesan
    document.getElementById('alertModal2').style.display = 'block'; // Tampilkan modal
  }


  // Event listener untuk menutup modal
  document.getElementById('closeAlertModal').addEventListener('click', function () {
    document.getElementById('alertModal').style.display = 'none'; // Menutup modal
  });

  // Event listener untuk menutup modal
  document.getElementById('closeAlertModal2').addEventListener('click', function () {
    document.getElementById('alertModal2').style.display = 'none'; // Menutup modal
  });

  // Event listener untuk menutup modal
  document.getElementById('closeSubmit').addEventListener('click', function () {
    document.getElementById('essayReviewModal').style.display = 'none'; // Menutup modal
  });

  document.getElementById('closeTime').addEventListener('click', function () {
    document.getElementById('timeWarningModal').style.display = 'none'; // Menutup modal
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('some-button-to-show-mcq').addEventListener('click', displayMultipleChoiceQuestions);
    document.getElementById('some-button-to-show-essay').addEventListener('click', displayEssayQuestions);
  });

  // Event listener untuk tombol OK di modal
  document.getElementById('okAlertButton').addEventListener('click', function () {
    document.getElementById('alertModal').style.display = 'none'; // Menutup modal
  });

  // Event listener untuk tombol OK di modal
  document.getElementById('okAlertButton2').addEventListener('click', function () {
    document.getElementById('alertModal2').style.display = 'none'; // Menutup modal
  });

  document.getElementById('okButton').addEventListener('click', function () {
    document.getElementById('essayReviewModal').style.display = 'none';
    document.querySelector("#questions-container").style.display = "block"
    document.querySelector("#questions-container-essay").style.display = "none"
    document.querySelector(".submit-container-essay").style.display = "none"
    document.getElementById('submit-exam').style.display = 'block'; // Tampilkan tombol submit pilihan ganda
    document.getElementById('go-to-essay').style.display = 'block'; // Tampilkan tombol go to essay
    document.getElementById('nav-buttons-container').style.display = 'grid'
    document.getElementById('nav-buttons-essay').style.display = 'none'

  });



  document.addEventListener('DOMContentLoaded', function () {

    // Cek apakah elemen submit-exam ada
    const submitExamButton = document.getElementById('submit-exam');
    if (submitExamButton) {
      submitExamButton.addEventListener('click', submitExam);
    } else {
      console.error('Tombol submit pilihan ganda tidak ditemukan');
    }

    // Tambahkan event listener untuk tombol lainnya
    const goToEssayButton = document.getElementById('go-to-essay');
    if (goToEssayButton) {
      goToEssayButton.addEventListener('click', displayEssayQuestions);
    } else {
      console.error('Tombol untuk pergi ke esai tidak ditemukan');
    }
  });

  // Tambahkan event listener untuk tombol navigasi esai
  document.addEventListener('DOMContentLoaded', function () {
    const essayNavButtons = document.querySelectorAll('.nav-button.essay');
    essayNavButtons.forEach(button => {
      button.addEventListener('click', function () {
        const questionId = this.textContent.replace('');
        scrollToEssayQuestion(questionId);
      });
    });
  });

});