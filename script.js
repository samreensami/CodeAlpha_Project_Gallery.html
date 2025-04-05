

document.querySelectorAll('#gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalImg = document.createElement('img');
        modalImg.src = image.src;
        modalImg.style.width = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.borderRadius = '10px';

        modal.appendChild(modalImg);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal); // Close modal on click
        });

        document.body.appendChild(modal);
    });
});
