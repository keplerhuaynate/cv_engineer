async function loadMarkdown(path, targetId) {
  const response = await fetch(path);
  const text = await response.text();
  document.getElementById(targetId).innerHTML = marked.parse(text);
}