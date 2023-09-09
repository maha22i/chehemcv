// import html2pdf from 'html2pdf.js';

// // Sélectionnez le bouton de téléchargement
// const downloadButton = document.getElementById('downloadButton');

// // Définissez une fonction pour générer le PDF
// function generatePDF() {
//     const cvContent = document.body; // Sélectionnez le contenu de votre CV
//     const pdfOptions = {
//         margin: 10,
//         filename: 'mon_cv.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf().from(cvContent).set(pdfOptions).outputPdf((pdf) => {
//         // Téléchargez le PDF
//         pdf.output('datauristring', {
//             filename: 'mon_cv.pdf',
//             callback: function (pdfString) {
//                 const link = document.createElement('a');
//                 link.href = pdfString;
//                 link.download = 'mon_cv.pdf';
//                 link.click();
//             }
//         });
//     });
// }

// // Ajoutez un gestionnaire d'événement au bouton de téléchargement
// downloadButton.addEventListener('click', generatePDF);
