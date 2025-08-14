export function renderPrograms(container, programs) {
    if (!programs || programs.length === 0) {
        container.innerHTML = '<p class="error">No programs available</p>';
        return;
    }
    // Check duplicate ID and remove if any
    const uniquePrograms = [];
    const idMap = {};
    for (const program of programs) {
      const id = program._id;
      if (!idMap[id]) {
        idMap[id] = true;
        uniquePrograms.push(program);
      } else {
        console.warn(`Removing duplicate program with ID: ${id} (${program.name})`);
      }
    }
    // Loop for unique programs only
    const linkHead = "https://www.confederationcollege.ca/programs/";
    const programsHTML = uniquePrograms.map(program => `
        <article class="program-card">
            <h2>${program.name || 'No name yet.'}</h2><br/>
            <p>${program.missionStatement || 'No description yet.'}</p><br/>
            ${program.slug?.current ? 
                `<a href="${linkHead}${program.slug.current}" 
                   class="program-link" target="_blank" rel="noopener noreferrer nofollow">
                    More Details
                </a>` : ''
            }
        </article>
    `).join('');

    container.innerHTML = programsHTML;
}