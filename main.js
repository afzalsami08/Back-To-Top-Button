window.onscroll = function() {
    back_top()
};

function back_top() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('back-btn').style.transform = 'scale(1)'; //Show back button
    }

    else {
        document.getElementById('back-btn').style.transform = 'scale(0)'; //Hide back button
    }
}

function back_function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}