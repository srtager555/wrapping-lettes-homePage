export function useCopy(ref) {
    var range = document.createRange(),
       selection = window.getSelection(),
       contentHolder = ref.current;

    selection.removeAllRanges();

    range.selectNodeContents(contentHolder);

    selection.addRange(range);

    document.execCommand("copy");

    selection.removeAllRanges();
 }
