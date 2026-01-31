<script>
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.previousElementSibling.style.display = "block";
    btn.style.display = "none";
  });
});
</script>
