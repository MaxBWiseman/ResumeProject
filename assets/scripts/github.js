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
}