function userInformationHTML(user) {
    return `
        <h2>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
            </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            </div>
            <p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`;
}

function fetchGitHubInformation(event) {
    let username = $('#gh-username').val();
    if (!username) {
        $('#gh-user-data-nousername').html('<h2 class="text-center">Please enter a GitHub username</h2>');
        return;
    }

    $('#loader-container').html(
        `<div class="loader" alt="loading...">
            
        </div>`
    );
    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            let userData = response;
            $('#gh-user-data').html(userInformationHTML(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $('#gh-user-data').html(`<h2 class="text-center">No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $('#gh-user-data').html(`<h2 class="text-center">Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }
    );
}