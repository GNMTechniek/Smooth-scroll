// Smoothscroll
<script>
   jQuery('#cta').click(function() {
   event.preventDefault();
   jQuery('html, body').animate({
  scrollTop: jQuery("#assortiment").offset().top -180
  }, 2000);
 });
</script>
