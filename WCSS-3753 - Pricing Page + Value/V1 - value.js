window.addEventListener('load', function () {
    loadTable();
});

function loadTable() {
    /* Get an create elements */
    var table = document.querySelector('.pricingMatrix-table.monthly');

    // Add css classes to some elements

    /* Add elements to table */
    // header table.childNodes[0]
    // Included in all plans head table.childNodes[1]
    // Included in all plans body
    table.childNodes[2].innerHTML = '<tr><th class="pricingMatrix-featureText"> No transaction fees <span class="icon icon-info ng-scope" tooltip-append-to-body="true" tooltip-placement="top" tooltip-html-unsafe="BigCommerce does not take a cut of transactions from your store."> </span> </th> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>0%</p></span></td> <td class=" feature feature--highlighted feature--featureOverride"><span class="featureTextWrapper"><p>0%</p></span> </td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>0%</p></span></td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>0%</p></span></td></tr><tr> <th class="pricingMatrix-featureText"> Products, file storage and bandwidth </th> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td> <td class=" feature feature--highlighted feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span> </td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td></tr><tr> <th class="pricingMatrix-featureText"> Staff accounts </th> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td> <td class=" feature feature--highlighted feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span> </td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td> <td class=" feature feature--featureOverride"><span class="featureTextWrapper"><p>Unlimited</p></span></td></tr>';
    // Sales channels head table.childNodes[3]
    // Sales channels body table.childNodes[4]

}