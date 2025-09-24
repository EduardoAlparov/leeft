import './midnight.jquery.min';

export default () => {
    function isMobileWidth() {
        return ($(window).innerWidth() < 743);
    }

    if(isMobileWidth()) {
        $('.page-header__inner').midnight();
    }
}
