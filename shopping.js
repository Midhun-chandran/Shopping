function viewList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
   
        if (this.readyState == 4 && this.status == 200) {
          
            var response = JSON.parse(this.responseText);
         

            var Prodlist = response.product;

         
            var table = "<table><tr><th>SL No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Add to cart</th></tr>"
            for (i = 0; i < Prodlist.length; i++) {

                table += "<tr><td>" + Prodlist[i]["SL No"] + "<td>" + Prodlist[i].Name + "</td>" + "<td>" + Prodlist[i].Quantity + "</td>" + "<td>" + Prodlist[i].Unit + "</td>" + "<td>" + Prodlist[i].Department + "</td>" + "<td>" + Prodlist[i].Notes + "</td>" + "<td><input type=checkbox></td></td>" + "</tr>";
            }

            table += "</table>";

            document.getElementById("tbl").style.visibility = 'visible';
            document.getElementById("tbl").innerHTML = table;
        }
    }
    xhttp.open("GET", "products.json", true);
    xhttp.send();
}