using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Encryption
{
    public class PasswordEncrypter
    {
        private string salt { get; set; } = "Alamakota";
        private const int hashSize = 16; 
        public string Encrypt(string password) 
        {
            var saltBytes = Encoding.ASCII.GetBytes(salt);
            var hashAlgorithm = new Rfc2898DeriveBytes(password, saltBytes);
            var hashCode = hashAlgorithm.GetBytes(hashSize);
            var hashCodeString = Encoding.ASCII.GetString(hashCode);

            return hashCodeString; 
        }
    }
}
