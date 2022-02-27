export function useSetScroll(showModal) {
  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
}
