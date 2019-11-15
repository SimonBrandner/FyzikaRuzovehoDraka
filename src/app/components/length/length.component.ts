import { Component, OnInit } from '@angular/core';

export interface unit
{
  value: string;
  viewValue: string;
}

@Component({
    selector: 'length',
    templateUrl: './length.component.html',
    styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit
{
    leftSelect: string;
    rightSelect: string;

    inputInputField: number;
    outputInputField: string;

    unit: any;

    metricUnits = ['mm', 'cm', 'dm', 'm', 'km'];
    frdUnits = ['ears'];

    leftUnits = this.metricUnits;
    rightUnits = this.frdUnits;

    metricUnitsOnTheLeft: boolean = true;

    switchClicked()
    {
        var currentLeftSelect: string = this.leftSelect;
        var currentRightSelect: string = this.rightSelect;

        this.metricUnitsOnTheLeft = !this.metricUnitsOnTheLeft;

        if (this.metricUnitsOnTheLeft)
        {
            this.leftUnits = this.metricUnits;
            this.rightUnits = this.frdUnits;
        }
        else
        {
            this.leftUnits = this.frdUnits;
            this.rightUnits = this.metricUnits;
        }

        this.leftSelect = currentRightSelect;
        this.rightSelect = currentLeftSelect;
    }

    convert()
    {
        var inputValueInMM: number;
        var output: number;

        if (this.metricUnitsOnTheLeft)
        {
            if (this.leftSelect == "mm")
            {
                inputValueInMM = this.inputInputField;
            }
            else if (this.leftSelect == "cm")
            {
                inputValueInMM = this.inputInputField * 10;
            }
            else if (this.leftSelect == "dm")
            {
                inputValueInMM = this.inputInputField * 100;
            }
            else if (this.leftSelect == "m")
            {
                inputValueInMM = this.inputInputField * 1000;
            }
            else if (this.leftSelect == "km")
            {
                inputValueInMM = this.inputInputField * 1000000;
            }

            output = inputValueInMM / 60;
        }

        else
        {
            inputValueInMM = this.inputInputField * 60;

            if (this.rightSelect == "mm")
            {
                output = inputValueInMM;
            }
            else if (this.rightSelect == "cm")
            {
                output = inputValueInMM / 10;
            }
            else if (this.rightSelect == "dm")
            {
                output = inputValueInMM / 100;
            }
            else if (this.rightSelect == "m")
            {
                output = inputValueInMM / 1000;
            }
            else if (this.rightSelect == "km")
            {
                output = inputValueInMM / 1000000;
            }
        }

        this.outputInputField = String(output);
    }

    constructor() { }

    ngOnInit() {console.log("On init"); }
}
