function Box() {
    return(
        <div class="tw-absolute tw-top-4 tw-left-[50%] tw-translate-x-[-50%]  
        tw-flex tw-p-1 tw-px-4 tw-rounded-md tw-gap-4 
        tw-border-2 tw-border-primary max-md:tw-w-full
        md:tw-w-fit tw-overflow-x-auto tw-h-[60px]">
<button class="tab-btn tab-active" onclick="openTab(event, &#39;about&#39;)">About</button>
<button class="tab-btn" onclick="openTab(event, &#39;skills&#39;)">Skills</button>
<button class="tab-btn" onclick="openTab(event, &#39;experience&#39;)">Experience</button>
<button class="tab-btn" onclick="openTab(event, &#39;call&#39;)">Schedule call</button>
</div>
    )
};
export default Box;