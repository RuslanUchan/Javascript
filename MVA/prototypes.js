let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

/* console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make); */
console.log(newCar.whatever);

/* console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));
 */
// SIG // Begin signature block
// SIG // MIIdkQYJKoZIhvcNAQcCoIIdgjCCHX4CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFIyCYbD+W5ps
// SIG // w5tDEY8OHD4dQdweoIIYUzCCBMEwggOpoAMCAQICEzMA
// SIG // AADCoAnFN3bp9s0AAAAAAMIwDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg1MVoXDTE4MDkwNzE3NTg1MVowgbExCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDDAKBgNVBAsTA0FPQzEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046QzNCMC0wRjZBLTQxMTExJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCc3z0+YE+WC4Be9vCKb/5DEptBUbWZjDFzHQwa1jPi
// SIG // zjm6zQCEwQNMNfOcOKnHEzs1yILBZTsr78hnyIx/uMy3
// SIG // pH6S/FOw7nHMg1XUty4O9IWAQhCZZdEsAIX6R0dQ+DUG
// SIG // niEZ4Z5UbklMMuy6jsQhOiH/dHR9PjmlZcYih8O0eUYH
// SIG // judJteQRyPur/VEu9CGfCRakZHy6ZOdm4SzX56LLFvgh
// SIG // 7wBT1UNLk4TDmqBEpybJm2p9EGhMWb37ca3k689kEHFc
// SIG // O+GNvQmG2UVEyMuMyKbjP4uaAS4/ZsH/QqIAtK0Im8Fn
// SIG // xLz8ohbjmf53A1+SPClR2uGNS6BUKmFpPxBJAgMBAAGj
// SIG // ggEJMIIBBTAdBgNVHQ4EFgQU4x552PzIYCwRGZgSbaGw
// SIG // bo3OnawwHwYDVR0jBBgwFoAUIzT42VJGcArtQPt2+7Mr
// SIG // sMM1sw8wVAYDVR0fBE0wSzBJoEegRYZDaHR0cDovL2Ny
// SIG // bC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMv
// SIG // TWljcm9zb2Z0VGltZVN0YW1wUENBLmNybDBYBggrBgEF
// SIG // BQcBAQRMMEowSAYIKwYBBQUHMAKGPGh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljcm9zb2Z0
// SIG // VGltZVN0YW1wUENBLmNydDATBgNVHSUEDDAKBggrBgEF
// SIG // BQcDCDANBgkqhkiG9w0BAQUFAAOCAQEAKDRUa7AP/m3b
// SIG // vCCbyqMXK8tLyD8NKs61Mmu7nfTKyf6afRDtNTha16mx
// SIG // X7j1tJ4qmbe4WK7O288EpZmwSLQpCJr9Bgi0v93H9FZf
// SIG // 3NDcVKZ/E1I6KPqsJzxd6kRlM3MKyP915fRH6A5XPI1n
// SIG // dn+Raq43kHZpHTlJrcUp1bdZG1vhZ45cpdavGlqZF14D
// SIG // awQ9vYl0FewZJbL7c0lSwd9lE2agA5v8s6jwvqLFjdnh
// SIG // xA9p2oNcNOdW6vvuT3NpgP1GyXqr/ifVYUMMkxqBXQox
// SIG // PcoH3e2gEj7MYgLEQbDUZcpRTI3jwJxWciND9KzPgltP
// SIG // UOuNUhCiCm0+k9cMPvAciTCCBgEwggPpoAMCAQICEzMA
// SIG // AADE6Yn4eoFQ6f8AAAAAAMQwDQYJKoZIhvcNAQELBQAw
// SIG // fjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEoMCYGA1UEAxMfTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EgMjAxMTAeFw0x
// SIG // NzA4MTEyMDIwMjRaFw0xODA4MTEyMDIwMjRaMHQxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xHjAcBgNVBAMTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAIiKuCTDB4+agHkV/CZg/HKILPr0
// SIG // o5eIlka3o8tfiS86My4ekXj6fKkfggG1essavAPKRuvF
// SIG // mff7BB3yhQr/Im6h8mc9xScY5Sgf9QSUQWPs47oVjO0T
// SIG // mjXeOHBUbzvsrUUJMEnBvo8wmQzLdsn3c5UWd9GLu5TH
// SIG // CIUg7R6oNfFxwuB0AEuK0tyR69Z4/o36rWCIPb25H65i
// SIG // l7/FhLGQrtavK9NU+zXazXGS5h7/7HFry38IdnTgEFFI
// SIG // 1PEAyEhMowc15VkN/XycyOZa44X11poPH46m5IQXwdbK
// SIG // nx0Bx/1IpxOSM5chSDL4wiSiALK+U8qDbilbge84boDz
// SIG // u+wTC+sCAwEAAaOCAYAwggF8MB8GA1UdJQQYMBYGCisG
// SIG // AQQBgjdMCAEGCCsGAQUFBwMDMB0GA1UdDgQWBBTL1mKE
// SIG // z2A56v9nwlzSyLurt8MTmDBSBgNVHREESzBJpEcwRTEN
// SIG // MAsGA1UECxMETU9QUjE0MDIGA1UEBRMrMjMwMDEyK2M4
// SIG // MDRiNWVhLTQ5YjQtNDIzOC04MzYyLWQ4NTFmYTIyNTRm
// SIG // YzAfBgNVHSMEGDAWgBRIbmTlUAXTgqoXNzcitW2oynUC
// SIG // lTBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQ
// SIG // Q0EyMDExXzIwMTEtMDctMDguY3JsMGEGCCsGAQUFBwEB
// SIG // BFUwUzBRBggrBgEFBQcwAoZFaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQ
// SIG // Q0EyMDExXzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQC
// SIG // MAAwDQYJKoZIhvcNAQELBQADggIBAAYWH9tXwlDII0+i
// SIG // UXjX7fj9zb3VwPH5G1btU8hpRwXVxMvs4vyZW5VfETgo
// SIG // wAVFE+CaeYi8Zqvbu+sCVSO3PSN4QW2u+PEAWpSZihzM
// SIG // CZXQmhxEMKmlFse6R1v1KzSLn49YN8NOHK8iyhDN2IIQ
// SIG // qTXwriLIjySmgYvfJxzkZh2JPi7/VwNNwW6DoDLrtLMv
// SIG // UFZdBrEVjMgdY7dzDOPWeiYPKpZFpzKDPpY+V0l3I4n+
// SIG // sRDHiuUIFVHFK1oxWzlqlqikiGuWKG/xxK7qvUUXzGJO
// SIG // gbVUGkeOmKVtwG4nxvgnH8jtIKkLsfHOC5qU4mqdaYOh
// SIG // NtdtIP6F1f/DuJc2Cf49FMGYFKnAhszvgsGrVSRDGLVI
// SIG // hXiG0PnSnT8Z2RSJ542faCSIaDupx4BOJucIIUxj/ZyT
// SIG // FU0ztVZgT9dKuTiO/y7dsV+kQ2vJeM+xu2uPg2yHcqrq
// SIG // pfuf3RrWOfxkyW0+COV8g7GtvKO6e8+WVqR6WMsSR2LS
// SIG // Ie/8PMQxC/cvPmSlN29gUD+3RJBPoAuLvn5Y9sdnh2Hb
// SIG // npjEyIzLb0fhwC6U7bH2sDBt7GpJqOmWdsi9CMT+O/Wu
// SIG // czcGslbPGdS79ZTKhxzygGoBT7YbgXOz01siPzpYGN+I
// SIG // 7mfESacv3CWLPV7Q7DREkR28kQx2gj7vxNgtoQQCjkj5
// SIG // 790CzwOiMIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDAN
// SIG // BgkqhkiG9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYD
// SIG // Y29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0w
// SIG // KwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEw
// SIG // NDAzMTMwMzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEw
// SIG // HwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Ew
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCf
// SIG // oWyx39tIkip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FM
// SIG // rXQwIBHrB9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cO
// SIG // BJjwicwfyzMkh53y9GccLPx754gd6udOo6HBI1PKjfpF
// SIG // zwnQXq/QsEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VS
// SIG // DOQDLPtqkJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21S
// SIG // tEWQn0gASkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1V
// SIG // eP4Bmh1QCIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuD
// SIG // k6FhArUdDbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGr
// SIG // MIIBpzAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQj
// SIG // NPjZUkZwCu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYw
// SIG // EAYJKwYBBAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAU
// SIG // DqyCYEBWJ5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJ
// SIG // kiaJk/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFglt
// SIG // aWNyb3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1M
// SIG // c1j0BxMuZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUH
// SIG // AQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJv
// SIG // b3RDZXJ0LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAN
// SIG // BgkqhkiG9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vO
// SIG // eVFNAbEudHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQ
// SIG // md16QOJXu69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I
// SIG // 4vBTFd1Pq5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4
// SIG // mS4N9wficLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsg
// SIG // P+IHGjL5zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfr
// SIG // Tot/xTUrXqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S
// SIG // 2hSY9Ty5ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6
// SIG // YinvopspNAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146So
// SIG // dDW4TsVxIxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGA
// SIG // nhUwZuhCEl4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRf
// SIG // WupW76bemZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2
// SIG // YbRuoROmv6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9
// SIG // La9Zj7jkIeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmS
// SIG // hxN1Ii8yqAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+J
// SIG // C33Iacjmbuqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kT
// SIG // o/0wggd6MIIFYqADAgECAgphDpDSAAAAAAADMA0GCSqG
// SIG // SIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIw
// SIG // MAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkgMjAxMTAeFw0xMTA3MDgyMDU5MDla
// SIG // Fw0yNjA3MDgyMTA5MDlaMH4xCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xKDAmBgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25p
// SIG // bmcgUENBIDIwMTEwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQCr8PpyEBwurdhuqoIQTTS68rZYIZ9C
// SIG // Gypr6VpQqrgGOBoESbp/wwwe3TdrxhLYC/A4wpkGsMg5
// SIG // 1QEUMULTiQ15ZId+lGAkbK+eSZzpaF7S35tTsgosw6/Z
// SIG // qSuuegmv15ZZymAaBelmdugyUiYSL+erCFDPs0S3XdjE
// SIG // LgN1q2jzy23zOlyhFvRGuuA4ZKxuZDV4pqBjDy3TQJP4
// SIG // 494HDdVceaVJKecNvqATd76UPe/74ytaEB9NViiienLg
// SIG // Ejq3SV7Y7e1DkYPZe7J7hhvZPrGMXeiJT4Qa8qEvWeSQ
// SIG // Oy2uM1jFtz7+MtOzAz2xsq+SOH7SnYAs9U5WkSE1JcM5
// SIG // bmR/U7qcD60ZI4TL9LoDho33X/DQUr+MlIe8wCF0JV8Y
// SIG // KLbMJyg4JZg5SjbPfLGSrhwjp6lm7GEfauEoSZ1fiOIl
// SIG // XdMhSz5SxLVXPyQD8NF6Wy/VI+NwXQ9RRnez+ADhvKwC
// SIG // gl/bwBWzvRvUVUvnOaEP6SNJvBi4RHxF5MHDcnrgcuck
// SIG // 379GmcXvwhxX24ON7E1JMKerjt/sW5+v/N2wZuLBl4F7
// SIG // 7dbtS+dJKacTKKanfWeA5opieF+yL4TXV5xcv3coKPHt
// SIG // bcMojyyPQDdPweGFRInECUzF1KVDL3SV9274eCBYLBNd
// SIG // YJWaPk8zhNqwiBfenk70lrC8RqBsmNLg1oiMCwIDAQAB
// SIG // o4IB7TCCAekwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0O
// SIG // BBYEFEhuZOVQBdOCqhc3NyK1bajKdQKVMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAP
// SIG // BgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFHItOgIx
// SIG // kEO5FAVO4eqnxzHRI4k0MFoGA1UdHwRTMFEwT6BNoEuG
// SIG // SWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8w
// SIG // M18yMi5jcmwwXgYIKwYBBQUHAQEEUjBQME4GCCsGAQUF
// SIG // BzAChkJodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18y
// SIG // Mi5jcnQwgZ8GA1UdIASBlzCBlDCBkQYJKwYBBAGCNy4D
// SIG // MIGDMD8GCCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpb3BzL2RvY3MvcHJpbWFyeWNwcy5o
// SIG // dG0wQAYIKwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8A
// SIG // cABvAGwAaQBjAHkAXwBzAHQAYQB0AGUAbQBlAG4AdAAu
// SIG // IB0wDQYJKoZIhvcNAQELBQADggIBAGfyhqWY4FR5Gi7T
// SIG // 2HRnIpsLlhHhY5KZQpZ90nkMkMFlXy4sPvjDctFtg/6+
// SIG // P+gKyju/R6mj82nbY78iNaWXXWWEkH2LRlBV2AySfNIa
// SIG // SxzzPEKLUtCw/WvjPgcuKZvmPRul1LUdd5Q54ulkyUQ9
// SIG // eHoj8xN9ppB0g430yyYCRirCihC7pKkFDJvtaPpoLpWg
// SIG // Kj8qa1hJYx8JaW5amJbkg/TAj/NGK978O9C9Ne9uJa7l
// SIG // ryft0N3zDq+ZKJeYTQ49C/IIidYfwzIY4vDFLc5bnrRJ
// SIG // OQrGCsLGra7lstnbFYhRRVg4MnEnGn+x9Cf43iw6IGmY
// SIG // slmJaG5vp7d0w0AFBqYBKig+gj8TTWYLwLNN9eGPfxxv
// SIG // FX1Fp3blQCplo8NdUmKGwx1jNpeG39rz+PIWoZon4c2l
// SIG // l9DuXWNB41sHnIc+BncG0QaxdR8UvmFhtfDcxhsEvt9B
// SIG // xw4o7t5lL+yX9qFcltgA1qFGvVnzl6UJS0gQmYAf0AAp
// SIG // xbGbpT9Fdx41xtKiop96eiL6SJUfq/tHI4D1nvi/a7dL
// SIG // l+LrdXga7Oo3mXkYS//WsyNodeav+vyL6wuA6mk7r/ww
// SIG // 7QRMjt/fdW1jkT3RnVZOT7+AVyKheBEyIXrvQQqxP/uo
// SIG // zKRdwaGIm1dxVk5IRcBCyZt2WwqASGv9eZ/BvW1taslS
// SIG // cxMNelDNMYIEqjCCBKYCAQEwgZUwfjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUg
// SIG // U2lnbmluZyBQQ0EgMjAxMQITMwAAAMTpifh6gVDp/wAA
// SIG // AAAAxDAJBgUrDgMCGgUAoIG+MBkGCSqGSIb3DQEJAzEM
// SIG // BgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgor
// SIG // BgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBT4alocybJ/
// SIG // pNW2A8w0JwgF28VdezBeBgorBgEEAYI3AgEMMVAwTqAm
// SIG // gCQATQBpAGMAcgBvAHMAbwBmAHQAIABMAGUAYQByAG4A
// SIG // aQBuAGehJIAiaHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L2xlYXJuaW5nIDANBgkqhkiG9w0BAQEFAASCAQBQerHW
// SIG // 6/Ln/JXczVeZE4yqTQ3NnrVHtO/uewXIXyLZcnrW/6OK
// SIG // eGCWAazA5PWj7/ph6V19OUW6YqdNrnWFFjT59qZRo7Vt
// SIG // akAzbzyuJETZMZ6+uCqv23ZfKSUth3rDOB7Z0zRhYQCv
// SIG // AtB3vwuIIvo1JgB0NrWdEN3QciN9jL9VyO6FDBVREka8
// SIG // uP2kBjLiGeoobYNXkqwflKfvJEZG3xuzeObD3YrZpCMk
// SIG // YuzoBGIH87ZG0sxXdKHFM3gtjv7nuxF5BN+RZhw+0Nrl
// SIG // NFlRW9h9WaFSAN5IKo5xiuWijpyEqqB6de07UxX+ug9+
// SIG // jm53Z3e15hVgjVIOu+m3tDO4J8KjoYICKDCCAiQGCSqG
// SIG // SIb3DQEJBjGCAhUwggIRAgEBMIGOMHcxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQQITMwAAAMKgCcU3dun2zQAAAAAAwjAJ
// SIG // BgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3
// SIG // DQEHATAcBgkqhkiG9w0BCQUxDxcNMTgwMzI3MDEzNzI1
// SIG // WjAjBgkqhkiG9w0BCQQxFgQUOpE1rvq/LjvLjvdtx71n
// SIG // yV5FuM4wDQYJKoZIhvcNAQEFBQAEggEAVfJ2TIQiDgnu
// SIG // 7ybNWKnzSxReyApqxZVQqfuV9ik/47K95fs4YVpqnVYD
// SIG // hN0i71dglWCAbldwUirUG5/8trxPJ1MmP1nBYqUEgWvI
// SIG // TzzJvE8//vinRbHzYcBf3OfMqZUnLDg0rCVsE6bTMzPJ
// SIG // iDpW0zJtzf2WIXVS4zcodK5fHMYyo9/khW87LC0pmHCm
// SIG // D1rAEOFDuLnJHLQnaixNm2mc4LTIloR1n93xNxuIK9/u
// SIG // rhzGl/Tw3U9Ome4goOunq+SMjbI6mwd0QwUj1QVRW5tf
// SIG // ivlk89eJMyZkBco1B6qKs947JUeHFC5F9Wlzd6PBhWl5
// SIG // laR9hjT64XjA9aRZ9T+Nyw==
// SIG // End signature block
