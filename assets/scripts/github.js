function fetchGitHubInformation(event) {
    let username = $('#gh-username').val();
    if (!username) {
        $('#gh-user-data').html('<h2>Please enter a GitHub username</h2>');
        return;
    }
}